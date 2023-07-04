import TvShowPoster from "./TvShowPoster";
import Casts from "./Casts";
import MoreDetails from "./MoreDetails";
import SimilarTvShows from "./SimilarTvShows";

import useMeta from "../../hooks/useMeta";

export default function TvShowDetails() {
  useMeta({
    title: "Random Show | Movieplex",
    description: "random info"
  });

  return (
    <main className="container tvshow-details-container">
      <TvShowPoster />
      <Casts />
      <MoreDetails />
      <SimilarTvShows />
    </main>
  );
}
