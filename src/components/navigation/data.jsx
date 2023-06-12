import {
  MdHomeFilled,
  MdTheaters,
  MdDesktopWindows,
  MdSearch,
  MdPerson,
  MdContactPage
} from "react-icons/md";

export const HomeTab = () => {
  return (
    <>
      <MdHomeFilled />
      <span>Home</span>
    </>
  );
};

export const MoviesTab = () => {
  return (
    <>
      <MdTheaters />
      <span>Movies</span>
    </>
  );
};

export const TvShowsTab = () => {
  return (
    <>
      <MdDesktopWindows />
      <span>TVShows</span>
    </>
  );
};

export const SearchTab = () => {
  return (
    <>
      <MdSearch />
      <span>Search</span>
    </>
  );
};

export const AboutTab = () => {
  return (
    <>
      <MdPerson />
      <span>About Us</span>
    </>
  );
};

export const ContactTab = () => {
  return (
    <>
      <MdContactPage />
      <span>Contact Us</span>
    </>
  );
};
