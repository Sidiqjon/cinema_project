import React from "react";
import logo from "@/assets/movietime.svg";

export const Loading = () => {
   return (
      <div className="w-full h-screen grid place-items-center">
         <img className="w-[120px]" src={logo} alt="Logo" />
      </div>
   );
};

export const Suspense = ({ children }) => {
   return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
