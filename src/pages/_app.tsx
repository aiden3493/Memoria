import { type AppType } from "next/dist/shared/lib/utils";
import { createContext, useState } from "react";
import PrimarySideBar from "../components/primarySideBar";
import SecondarySideBar from "../components/secondarySideBar";
import TitleBar from "../components/titleBar";

import "../styles/globals.css";
import { type globalContextType } from "../types/globalContext";
import { type schedulesType } from "../types/schedule";

export const globalContext = createContext<globalContextType>({
  schedules: {},
  setSchedules: undefined,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [schedules, setSchedules] = useState<schedulesType>({});

  const contextData: globalContextType = {
    schedules,
    setSchedules,
  };

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center space-y-3 p-3">
      <globalContext.Provider value={contextData}>
        <TitleBar />
        <main className="flex h-full w-full flex-1 space-x-3 overflow-hidden rounded-lg">
          <PrimarySideBar />
          <Component {...pageProps} />
          <SecondarySideBar />
        </main>
      </globalContext.Provider>
    </div>
  );
};

export default MyApp;
