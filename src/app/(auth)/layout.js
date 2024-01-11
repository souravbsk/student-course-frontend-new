"use client";
import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleDialogClick = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {isDialogOpen && (
        <>
          <div className="fixed z-10 inset-0 bg-black/30" onClick={handleDialogClick}>
          </div>
          <div className="fixed z-20 bg-slate-100 max-w-full w-[95%] md:w-[40vw] md:max-w-[600px] top-[100px] left-[50vw] translate-x-[-50%] rounded-lg border-2 max-h-[550px] min-h-[400px] overflow-x-hidden overflow-y-auto pt-10 px-8 py-6">
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
