import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

// Custom Hooks
import useFetch from "../../hooks/useFetch";

// Page Components
import TvShowPoster from "./TvShowPoster";
import Casts from "./Casts";
import MoreDetails from "./MoreDetails";
const SimilarTvShows = lazy(() => import("./SimilarTvShows"));

// Other Components
import Loader from "../../components/Loader";
import InitialLoader from "../../components/InitialLoader";

export default function TvShowDetails() {
  const { id: show_id } = useParams();
  const res = useFetch(`/.netlify/functions/getShowDetails?show_id=${show_id}`);

  if (res.status !== "success") return <InitialLoader />;

  return (
    <main className="container tvshow-details-container">
      <TvShowPoster tvshow={res} />
      <Casts casts={res.casts} />
      <MoreDetails res={res} />

      <Suspense fallback={<Loader />}>
        {res.similar_shows.length > 0 && (
          <SimilarTvShows shows={res.similar_shows} />
        )}
      </Suspense>
    </main>
  );
}
