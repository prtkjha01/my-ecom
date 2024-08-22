import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (router.query.q) {
      setQuery(router.query.q);
    }
  }, []);
  return (
    <div className="w-full relative">
      <input
        className="outline-none bg-slate-50 h-min rounded w-full py-1 pl-3 pr-12"
        type="text"
        name="search-bar"
        value={query}
        id="search-bar"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyUp={(e) => {
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
