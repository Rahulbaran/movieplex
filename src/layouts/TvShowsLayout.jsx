import { Outlet } from "react-router-dom";

export default function TvShowsLayout() {
  return (
    <main className="container tvshows-container">
      <Outlet />
    </main>
  );
}
