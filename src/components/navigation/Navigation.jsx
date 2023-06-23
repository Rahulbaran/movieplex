import { NavLink, Link } from "react-router-dom";
import {
  HomeTab,
  MoviesTab,
  TvShowsTab,
  SearchTab,
  AboutTab,
  ContactTab
} from "./data";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src="/logo/movieplex.png" alt="logo" />
        </Link>
      </div>

      <nav className="navigation">
        <ul className="navigation-menu">
          <li>
            <NavLink className="navigation-link" to="/" aria-label="Home">
              <HomeTab />
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navigation-link"
              to="/movies"
              aria-label="Movies"
            >
              <MoviesTab />
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navigation-link"
              to="/tvshows"
              aria-label="TvShows"
            >
              <TvShowsTab />
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navigation-link"
              to="/search"
              aria-label="Search"
            >
              <SearchTab />
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation-link" to="/about" aria-label="About">
              <AboutTab />
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navigation-link"
              to="/contact"
              aria-label="Contact"
            >
              <ContactTab />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
