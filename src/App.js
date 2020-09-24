import React from "react";
import MainPage from "./components/mainPage";
import ModalWindow from "./components/modal";
import {
  dataListContext,
  useDataListContext,
} from "./contexts/dataListContext";
//
import { packageContext, usePackageContext } from "./contexts/packageContext";
//
function App() {
  const packageContextValue = usePackageContext();
  const dataListContextValue = useDataListContext();
  return (
    <React.Fragment>
      <packageContext.Provider value={packageContextValue}>
        <dataListContext.Provider value={dataListContextValue}>
          <MainPage />
          <ModalWindow />
        </dataListContext.Provider>
      </packageContext.Provider>
    </React.Fragment>
  );
}

export default App;
