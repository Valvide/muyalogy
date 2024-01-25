"use client";

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import TwoFactorAuthSwitch from "./twofactorauth-switch";
import { isTeacher } from "@/lib/teacher";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className=" bg-blue-800 font-thin text-white text-lg">
            {/* <FaUser className="text-white" /> */}
            {user?.name?.split("")[0]}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-200" align="end">
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer font-semibold ">
            <ExitIcon className="h-6 w-4 mr-4" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
        <DropdownMenuSeparator />
        {isTeacher(user?.id) && (
          <TwoFactorAuthSwitch>
            <DropdownMenuItem className="cursor-pointer">
              {/* <ExitIcon className="h-4 w-4 mr-2" /> */}

              {/* TwoFactorAuth */}
            </DropdownMenuItem>
          </TwoFactorAuthSwitch>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
