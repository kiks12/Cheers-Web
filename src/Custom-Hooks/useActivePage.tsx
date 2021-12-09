import React, { createContext, useContext, useState } from "react";

const activePageContext = createContext<any>([]);

export const ActivePageProvider = ({ children }: any) => {
  const [activePage, setActivePage] = useState<any>("home");
  return (
    <activePageContext.Provider value={[activePage, setActivePage]}>
      {children}
    </activePageContext.Provider>
  );
};

export const useActivePage = () => useContext(activePageContext);
