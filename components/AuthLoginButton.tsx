"use client";

import { ReactElement } from "react";
import { signIn } from "next-auth/react";

const AuthLoginButton = ({
  providerId,
  providerName,
  providerIcon,
}: {
  providerId: string;
  providerName: string;
  providerIcon: ReactElement;
}) => {
  return (
    <button
      className="flex
        items-center
        justify-around
        bg-white
        transition
        hover:bg-slate-100
        w-full
        px-3
        py-1
        rounded-md
        mb-2"
      onClick={() => signIn(providerId)}
    >
      <div className="mr-4">{providerIcon}</div>
      <label className="font-bebas-neue font-[400] text-xl tracking-wide cursor-pointer">
        Login with {providerName}
      </label>
    </button>
  );
};

export default AuthLoginButton;
