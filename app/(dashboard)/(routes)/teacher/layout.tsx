import { currentUser } from "@/lib/auth";
import { isTeacher } from "@/lib/teacher";

import { redirect } from "next/navigation";

const TeacherLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  const userId = user?.id;

  if (!isTeacher(userId)) {
    return redirect("/");
  }

  return <>{children}</>;
};

export default TeacherLayout;
