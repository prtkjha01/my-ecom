import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import Filters from "./components/Filters";
import ResultsGrid from "./components/ResultsGrid";
import SortOptions from "./components/SortOptions";
import { IoIosOptions } from "react-icons/io";

const Search: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex min-h-screen bg-white">
        <div className="filters hidden sm:block md:block lg:block w-[20%]  shadow-lg">
          <Filters />
        </div>
        <div className="search-results w-full sm:w-[80%] md:w-[80%] lg:w-[80%] p-4 ">
          <div className="flex justify-between items-center mb-4">
            <SortOptions />

            <div className="filter-btn block sm:hidden">
              <IoIosOptions size={20} onClick={onOpen} />
            </div>
          </div>
          <ResultsGrid />
        </div>
      </div>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Filters />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Search;
