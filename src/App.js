import React from "react";
import MainPage from "./components/mainPage";
import ModalWindow from "./components/modal";
import {
  currentPageContext,
  useCurrentPageContext,
} from "./contexts/currentPage";
import {
  dataListContext,
  useDataListContext,
} from "./contexts/dataListContext";
import { packageContext, usePackageContext } from "./contexts/packageContext";
import {
  selectedRowContext,
  useSelectedRowContext,
} from "./contexts/selectedRowContext";
//
function App() {
  const packageContextValue = usePackageContext();
  const dataListContextValue = useDataListContext();
  const selectedRowContextValue = useSelectedRowContext();
  const currentPageContextValue = useCurrentPageContext();
  return (
    <React.Fragment>
      <packageContext.Provider value={packageContextValue}>
        <dataListContext.Provider value={dataListContextValue}>
          <selectedRowContext.Provider value={selectedRowContextValue}>
            <currentPageContext.Provider value={currentPageContextValue}>
              <MainPage />
              <ModalWindow />
            </currentPageContext.Provider>
          </selectedRowContext.Provider>
        </dataListContext.Provider>
      </packageContext.Provider>
    </React.Fragment>
  );
}

export default App;
