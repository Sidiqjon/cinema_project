import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <>
         <Header />
         <main className="min-h-[80vh]">
            <Outlet />
         </main>
         <Footer />
      </>
   );
};

export default Layout;
