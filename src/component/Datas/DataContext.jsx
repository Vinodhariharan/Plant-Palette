
// DataContext.jsx
import { createContext, useEffect, useState } from "react";
import containers from "./containers";
import flowers from "./flowers";
import tools from "./tools";
import fertilizers from "./fertilizers";
import shrubs from "./shrubs";
import trendingPlants from "./trendingPlants";
// import trees from "./trees";

const DataContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    // Try to get data from localStorage
    const storedData = localStorage.getItem("myData");
    return storedData ? JSON.parse(storedData) : "Default Value";
  });

  useEffect(() => {
    const allData = {
      containers,
      flowers,
      tools,
      fertilizers,
      shrubs,
      trendingPlants,
    };

    // Save data to localStorage whenever it changes
    localStorage.setItem("myData", JSON.stringify(allData));
    setData(allData);
    console.log(allData);
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { MyContextProvider, DataContext };