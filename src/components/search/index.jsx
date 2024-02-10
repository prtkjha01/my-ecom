import Filters from "./components/Filters";
import ResultsGrid from "./components/ResultsGrid";
import SortOptions from "./components/SortOptions";
const index = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="filters hidden sm:block md:block lg:block w-[20%]  shadow-lg">
        <Filters />
      </div>
      <div className="search-results w-full sm:w-[80%] md:w-[80%] lg:w-[80%] p-4 ">
        <SortOptions />
        <ResultsGrid />
      </div>
    </div>
  );
};

export default index;
