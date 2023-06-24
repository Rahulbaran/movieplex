import { Outlet, NavLink } from "react-router-dom";

export default function MoviesLayout() {
  return (
    <main className="container movies-container">
      <header className="movies-header">
        <h1>Movies</h1>
      </header>

      <nav className="movies-navigation">
        <ul>
          <li>
            <NavLink to="/movies/upcoming">Upcoming</NavLink>
          </li>
          <li>
            <NavLink to="/movies/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/movies/top_rated">Top Rated</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </main>
  );
}
