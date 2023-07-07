import { useState } from "react";

import useMeta from "../../hooks/useMeta";
import SearchForm from "./SearchForm";

export default function MoviesSearch() {
  useMeta({ title: "Search Movies | Movieplex", description: "" });
  const [searchStr, setSearchStr] = useState("");

  const handleSearchStr = str => setSearchStr(str);
  const handleSearch = e => {
    e.preventDefault();
  };

  return (
    <section className="search-section">
      <div className="search-form-container">
        <SearchForm
          type="movie"
          searchStr={searchStr}
          handleSearchStr={handleSearchStr}
          handleSearch={handleSearch}
        />
      </div>
    </section>
  );
}
