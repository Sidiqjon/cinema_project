import React from 'react'
import { Toaster } from "react-hot-toast";
import MainRouters from "./pages";

function App() {
   return (
      <div className="bg-[#000] text-white">
         <MainRouters />
         <Toaster position="top-center" reverseOrder={false} />
      </div>
   );
}

export default App;
// className="dark:bg-dark dark:text-white"
