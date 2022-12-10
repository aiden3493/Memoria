import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Memoria</title>
        <meta
          name="description"
          content="An Easy-to-Use Calendar App for desktop to Improve Productivity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1 rounded-lg bg-gray-400"></div>
    </>
  );
};

export default Home;
