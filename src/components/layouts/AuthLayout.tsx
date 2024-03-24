import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-gradient-to-b from-brand to-secondary min-h-screen flex justify-center items-center text-gray-800 dark:text-gray-300">
        <div className="w-full max-w-[400px] mx-auto bg-white dark:bg-gray-800  rounded-none sm:rounded-2xl shadow-lg p-6 sm:p-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
