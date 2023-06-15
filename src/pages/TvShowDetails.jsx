import useMeta from "../hooks/useMeta";

export default function TvShowDetails({ tvshow }) {
  useMeta({
    title: `${tvshow.title} | Movieplex`,
    description: tvshow.overview.slice(0, 140)
  });

  return (
    <main className="container tvshow-details-container">
      <h1>TvShows Container</h1>
    </main>
  );
}
