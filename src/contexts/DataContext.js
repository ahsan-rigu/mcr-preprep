import React, { createContext, useEffect, useState } from "react";
import { inventoryData } from "../data";

export const DataContext = createContext();

const DataContextProvier = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("data") === null) {
      setData(inventoryData);
    } else {
      setData(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvier;
