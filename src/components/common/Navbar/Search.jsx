import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useState } from "react";
const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  return (
    <div className="w-full relative">
      <input
        className="outline-none bg-slate-50 h-min rounded w-full py-1 pl-3 pr-12"
        type="text"
        name=""
        id=""
        onKeyUp={(e) => {
          setQuery(e.target.value);

          if (e.key === "Enter") {
            router.push("/search?q=" + query);
          }
        }}
      />
      <SearchIcon
        className="absolute right-4 top-2 cursor-pointer"
        onClick={(e) => {
          router.push("/search?q=" + query);
        }}
      />
    </div>
  );
};

export default Search;
