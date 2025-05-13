
import { useState } from "react";
import { Card } from "@/components/ui/card";

const Header = () => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-slate-700 dark:bg-slate-600 rotate-45"></div>
          <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
            Employee Manager
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
