"use server";

import * as z from "zod";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import LoginSchema from "@/schemas/loginFormSchema";

import { authenticator } from "otplib";
import { getUserByEmail } from "@/utils/upsertUserByEmail";
import QRCode from "qrcode";
import { redirect } from "next/navigation";

// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null
) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password, code } = validatedFields.data;

  // Guard clause will be updated soon
  const existingUser = await getUserByEmail(email);

  if (existingUser?.TwoFactorEnabled) {
    if (!code) {
      const secret = existingUser.secret_key || authenticator.generateSecret();

      const otpauth = authenticator.keyuri(
        existingUser.email,
        "justPlayingWithQr",
        secret
      );
      if (!existingUser.secret_key) {
        const { data, error } = await supabase
          .from("users")
          .update({ secret_key: secret })
          .eq("id", existingUser.id);
      }
      // do some try catch here #FIXME
      const qrCodeImageUrl = await QRCode.toDataURL(otpauth);

      return { twoFactor: true, otpauth: qrCodeImageUrl };
    }
    if (code) {
      const { data, error } = await supabase
        .from("users")
        .select("secret_key")
        .eq("id", existingUser.id)
        .single();
      // console.log(data);
      if (error || !data) {
        return { error: "Error fetching 2FA secret" };
      }
      const isValid = authenticator.verify({
        token: code,
        secret: data.secret_key,
      });

      if (isValid) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          console.error("Login error", error.message);
          return null;
        }

        redirect("/admin");
      } else {
        return { error: "Invalid OTP" };
      }
    }
  }
};

// First receive the values
// Second validate
//Check the user in the table and get the user with it's value
// generate the url  and send it to the front-end
// set the show token model to true
// if there is code verify
//and tick the auth to authenticated
