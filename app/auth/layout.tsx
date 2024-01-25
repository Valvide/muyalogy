const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-full h-svh flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      {children}
    </div>
  );
};

export default AuthLayout;
