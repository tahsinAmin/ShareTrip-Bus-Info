import Head from "next/head";
import SearchModifier from "../components/SearchModifier";
import FilterPanel from "../components/FilterPanel";
import BusInfo from "../components/BusInfo";

export default function Home() {
  return (
    <div className='min-h-screen m-0 p-0 box-border'>
      <Head>
        <title>ShareTrip</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <SearchModifier />
        <div className='flex mt-4 w-4/5 mx-auto space-x-4'>
          <FilterPanel />
          <BusInfo />
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
    </div>
  );
}
