import React from "react";
import loginBg from "@/assets/images/login-bg.png";

type LoginLayoutProps = {
  children: React.ReactNode;
  imgUrl?: string;
};

export const LoginLayout = ({
  children,
  imgUrl = loginBg,
}: LoginLayoutProps) => {
  return (
    <div className="flex h-screen max-lg:h-auto max-lg:flex-col-reverse">
      <div className="flex w-1/2 flex-col justify-center bg-white px-10 max-lg:w-full">
        {children}
      </div>

      <div
        className="flex w-1/2 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 max-lg:h-[428px] max-lg:w-full max-md:h-[287px]"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};
