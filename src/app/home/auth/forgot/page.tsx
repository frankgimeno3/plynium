"use client";

import Link from "next/link";
import React, { FC } from "react";

const ForgotPassword: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow pt-24 px-4">
      <div className="flex flex-col gap-4 bg-gray-900 p-8 rounded shadow-md w-full max-w-md mt-36">
        <h2 className="text-2xl font-semibold mb-2 text-center text-white">Forgot password?</h2>
        <p className="text-center text-sm text-gray-200">
          Reset flow can be connected to Cognito or your auth provider here.
        </p>
        <Link
          href="/home/auth/login"
          className="text-center text-[#DA6D00] hover:text-[#ff8c2a] text-sm font-medium"
        >
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
