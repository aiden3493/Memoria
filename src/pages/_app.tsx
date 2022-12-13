import { type AppType } from "next/dist/shared/lib/utils";
import PrimarySideBar from "../components/primarySideBar";
import SecondarySideBar from "../components/secondarySideBar";
import TitleBar from "../components/titleBar";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center space-y-3 p-3">
      <TitleBar />
      <main className="flex h-full w-full flex-1 space-x-3 overflow-hidden rounded-lg">
        <PrimarySideBar />
        <Component {...pageProps} />
        <SecondarySideBar />
      </main>
    </div>
  );
};

export default MyApp;
