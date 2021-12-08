import SearchModifier from "../components/SearchModifier";
import FilterPanel from "../components/FilterPanel";
import BusInfo from "../components/BusInfo";

export default function Home() {
  return (
    <div className=''>
      <main>
        <SearchModifier />
        {/* <BusInfo /> */}
        <div className='flex mt-4 max-w-7xl mx-auto space-x-4'>
          <FilterPanel />
          <BusInfo />
        </div>
      </main>
    </div>
  );
}
