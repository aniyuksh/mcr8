import React, { createContext, useState } from "react";
import { data } from "../data/data";

export const Context = createContext();

const DataContext = ({ children }) => {
  const [toShow, setToShow] = useState(data);
  const [modalrv , setModalRv] = useState(false);
  const [modalAlready , setModalAlready] = useState(false);
  return (
    <Context.Provider value={{ toShow, setToShow, modalrv , modalAlready , setModalAlready , setModalRv }}>
      {children}
    </Context.Provider>
  );
};

export default DataContext;
