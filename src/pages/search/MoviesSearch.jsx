import { useState } from "react";

import useMeta from "../../hooks/useMeta";
import SearchForm from "./SearchForm";

export default function MoviesSearch() {
  useMeta({ title: "Search Movies | Movieplex", description: "" });
  const [query, setQuery] = useState("");

  const handleQuery = str => setQuery(str);
  const handleSearchForm = e => {
    e.preventDefault();
  };

  return (
    <section className="search-section">
      <div className="search-form-container">
        <SearchForm
          type="movie"
          query={query}
          handleQuery={handleQuery}
          handleSearchForm={handleSearchForm}
        />
      </div>
    </section>
  );
}
