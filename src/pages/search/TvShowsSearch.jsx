import { useState } from "react";

import useMeta from "../../hooks/useMeta";
import SearchForm from "./SearchForm";

export default function TvShowsSearch() {
  useMeta({ title: "Search TVShows | Movieplex", description: "" });
  const [searchStr, setSearchStr] = useState("");

  const handleSearchStr = str => setSearchStr(str);
  const handleSearch = e => {
    e.preventDefault();
  };

  return (
    <section className="search-section">
      <div className="search-form-container">
        <SearchForm
          type="tvshow"
          searchStr={searchStr}
          handleSearchStr={handleSearchStr}
          handleSearch={handleSearch}
        />
      </div>
    </section>
  );
}
