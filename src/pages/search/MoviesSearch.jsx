import useMeta from "../../hooks/useMeta";

export default function MoviesSearch() {
  useMeta({ title: "Search Movies | Movieplex", description: "" });

  return (
    <section className="movies-search-section">
      <h1>Search Movies</h1>
    </section>
  );
}
