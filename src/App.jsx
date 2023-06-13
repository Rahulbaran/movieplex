import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

/* Layouts */
import RootLayout from "./layouts/RootLayout";
import MoviesLayout from "./layouts/MoviesLayout";
import TvShowsLayout from "./layouts/TvShowsLayout";

/* Pages */
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import TvShows from "./pages/TvShows";
import TvShowDetails from "./pages/TvShowDetails";
import Search from "./pages/Search";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="movies" element={<MoviesLayout />}>
        <Route index element={<Movies />} />
        <Route
          path=":type"
          element={<Movies />}
          errorElement={<h1>Not Available</h1>}
        />
      </Route>
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="tvshows" element={<TvShowsLayout />}>
        <Route index element={<TvShows />} />
        <Route
          path=":type"
          element={<TvShows />}
          errorElement={<h1>Not Available</h1>}
        />
      </Route>
      <Route path="tvshow/:id" element={<TvShowDetails />} />

      <Route path="search" element={<Search />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<h1>Something went wrong</h1>}
    ></RouterProvider>
  );
}
