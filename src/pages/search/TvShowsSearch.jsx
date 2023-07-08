import { useState } from "react";

import useMeta from "../../hooks/useMeta";
import SearchForm from "./SearchForm";

export default function TvShowsSearch() {
  useMeta({ title: "Search TVShows | Movieplex", description: "" });
  const [query, setQuery] = useState("");

  const handleQuery = str => setQuery(str);
  const handleSearchForm = e => {
    e.preventDefault();
  };

  return (
    <section className="search-section">
      <div className="search-form-container">
        <SearchForm
          type="tvshow"
          query={query}
          handleQuery={handleQuery}
          handleSearchForm={handleSearchForm}
        />
      </div>
    </section>
  );
}
