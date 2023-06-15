import useMeta from "../hooks/useMeta";

export default function Search() {
  useMeta({ title: "Search | Movieplex", description: "" });

  return (
    <main className="container search-container">
      <h1>Search Container</h1>
    </main>
  );
}
