import React, { useEffect, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const Search: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (router.query.q) {
      setQuery(router.query.q as string);
    }
  }, [router.query.q]);

  return (
    <div className="w-full relative">
      <input
        className="outline-none bg-slate-50 h-min rounded w-full py-1 pl-3 pr-12"
        type="text"
        name="search-bar"
        value={query}
        id="search-bar"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
        }}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            router.push("/search?q=" + query);
          }
        }}
      />
      <SearchIcon
        className="absolute right-4 top-2 cursor-pointer"
        onClick={() => {
          router.push("/search?q=" + query);
        }}
      />
    </div>
  );
};

export default Search;
