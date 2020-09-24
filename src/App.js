import React from "react";
import MainPage from "./components/mainPage";
import ModalWindow from "./components/modal";
//
import { packageContext, usePackageContext } from "./contexts/packageContext";
//
function App() {
  const contextValue = usePackageContext();
  return (
    <React.Fragment>
      <packageContext.Provider value={contextValue}>
        <MainPage />
        <ModalWindow />
      </packageContext.Provider>
    </React.Fragment>
  );
}

export default App;
