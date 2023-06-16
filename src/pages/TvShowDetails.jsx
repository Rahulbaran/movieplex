import useMeta from "../hooks/useMeta";

export default function TvShowDetails() {
  useMeta({
    title: "Random Show | Movieplex",
    description: "random info"
  });

  return (
    <main className="container tvshow-details-container">
      <h1>TvShows Container</h1>
    </main>
  );
}
