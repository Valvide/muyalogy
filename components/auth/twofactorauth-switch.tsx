"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition, useState } from "react";
import { useSession } from "next-auth/react";

import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

import { useCurrentUser } from "@/hooks/use-current-user";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { UserRole } from "@prisma/client";
import { TwoFactorSchema } from "@/schemas";
import { twoFactorAuth } from "@/actions/two-factor";

const TwoFactorAuthSwitch = ({ children }: { children: React.ReactNode }) => {
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof TwoFactorSchema>>({
    resolver: zodResolver(TwoFactorSchema),
    defaultValues: {
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });
  const onSubmit = (values: z.infer<typeof TwoFactorSchema>) => {
    startTransition(() => {
      twoFactorAuth(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };
  return (
    <>
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" cursor-pointer flex justify-center items-center ">
            <div className="space-y-2">
              {user?.isOAuth === false && (
                <FormField
                  control={form.control}
                  name="isTwoFactorEnabled"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-center  p-4 ">
                      <FormControl className="mr-4  ">
                        <Switch
                          disabled={isPending}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Two Factor Authentication</FormLabel>
                    </FormItem>
                  )}
                />
              )}
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" size="sm">
              Save
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default TwoFactorAuthSwitch;
