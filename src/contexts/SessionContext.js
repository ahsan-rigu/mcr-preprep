import React, { createContext, useState } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [filterData, setFilterData] = useState({
    category: "",
    lowStockOnly: false,
    sort: "name",
  });

  return (
    <SessionContext.Provider value={{ filterData, setFilterData }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
