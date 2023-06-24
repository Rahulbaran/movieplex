import { Outlet, NavLink } from "react-router-dom";

export default function TvShowsLayout() {
  return (
    <main className="container tvshows-container">
      <header className="shows-header">
        <h1>TV Shows</h1>
      </header>

      <nav className="shows-navigation">
        <ul>
          <li>
            <NavLink to="/tvshows/on_the_air">On The Air</NavLink>
          </li>
          <li>
            <NavLink to="/tvshows/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/tvshows/top_rated">Top Rated</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </main>
  );
}
