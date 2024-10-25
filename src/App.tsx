import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { GlobalContextProvider } from "./context/globalContext";

function App() {
  return (
    <GlobalContextProvider>
      <MainLayout />
    </GlobalContextProvider>
  );
}

export default App;
