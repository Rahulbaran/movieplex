import { NavLink } from "react-router-dom";
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
      <nav className="navigation">
        <ul className="navigation-menu">
          <li>
            <NavLink className="navigation-link" to="/">
              <HomeTab />
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation-link" to="/movies">
              <MoviesTab />
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation-link" to="/tvshows">
              <TvShowsTab />
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation-link" to="/search">
              <SearchTab />
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation-link" to="/about">
              <AboutTab />
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation-link" to="/contact">
              <ContactTab />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
