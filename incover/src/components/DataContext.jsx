import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  return (
    <DataContext.Provider value={{ selectedPolicy, setSelectedPolicy }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}