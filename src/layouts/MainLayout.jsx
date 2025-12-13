import React from "react";
import useBreakpoint from "../composables/useBreakpoint";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";

const MainLayout = ({ children }) => {
  const { isMobile } = useBreakpoint();

  return (
    <div className="min-h-screen flex flex-col">
      {isMobile ? (
        <div className="flex flex-col flex-grow">
          <MobileNav />
          <main className="p-2 flex-grow overflow-y-auto overflow-x-hidden">
            {children}
          </main>
        </div>
      ) : (
        <div className="flex flex-grow">
          <DesktopNav />

          <main className="p-6 flex-grow overflow-y-auto overflow-x-hidden max-h-screen">
            {children}
          </main>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
