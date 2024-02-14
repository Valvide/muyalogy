import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export async function getUserByEmail(email: string) {
  // Destructure for clarity

  // Attempt to find the user by email

  const { data: existingUser, error: findError } = await supabase
    .from("users")
    .select()
    .eq("email", email)
    .single();

  // If the user already exists, return or handle this case as needed
  if (existingUser) {
    console.log("User already exists:", existingUser);
    return existingUser; // or handle as needed
  } else if (findError && !findError.message.includes("No rows found")) {
    // If an error other than "No rows found", log and handle it
    console.error("Error finding user:", findError);
    return { error: "Update your user name in the supabase user datatable" }; // or handle error as needed
  }

  // If the user doesn't exist, insert them into the database
}
