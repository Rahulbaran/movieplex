import { Outlet, NavLink } from "react-router-dom";

export default function SearchLayout() {
  return (
    <main className="container search-container">
      <header className="search-header">
        <h1>Search</h1>
      </header>

      <nav className="search-navigation">
        <ul>
          <li>
            <NavLink to="/movies">Search Movies</NavLink>
          </li>
          <li>
            <NavLink to="/tvshows">Search TVShows</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </main>
  );
}
