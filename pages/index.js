import SearchModifier from "../components/SearchModifier";
import FilterPanel from "../components/FilterPanel";
import BusInfo from "../components/BusInfo";

export default function Home() {
  return (
    <div className=''>
      <main>
        <SearchModifier />
        <div className='lg:flex mt-4 max-w-7xl lg:mx-auto lg:space-x-4'>
          <FilterPanel />
          <BusInfo />
        </div>
      </main>
    </div>
  );
}
