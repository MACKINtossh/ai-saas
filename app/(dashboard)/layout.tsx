import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      {/* SIDEBAR */}
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed  md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 ">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default layout;
