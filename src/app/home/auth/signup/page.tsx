import Link from "next/link";
import React, { FC } from "react";

interface SignupProps {}

const Signup: FC<SignupProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow pt-24 px-4">
      <div className="flex flex-col gap-4 bg-gray-900 p-8 rounded shadow-md w-full max-w-md mt-36">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Sign up</h2>
        <p className="text-center text-sm text-gray-200">
          Registration form goes here. Connect this page to your signup flow when ready.
        </p>
        <p className="text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link href="/home/auth/login" className="text-[#DA6D00] hover:text-[#ff8c2a] font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
