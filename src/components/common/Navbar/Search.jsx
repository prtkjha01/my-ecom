import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
const Search = () => {
  const router = useRouter();
  return (
    <div className="w-full relative">
      <input
        className="outline-none bg-slate-50 h-min rounded w-full py-1 pl-3 pr-12"
        type="text"
        name=""
        id=""
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            router.push("/search?q=" + e.target.value);
          }
        }}
      />
      <SearchIcon className="absolute right-4 top-2 cursor-pointer" />
    </div>
  );
};

export default Search;
