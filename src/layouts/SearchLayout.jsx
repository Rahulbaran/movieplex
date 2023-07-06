import { Outlet } from "react-router-dom";

export default function SearchLayout() {
  return (
    <main className="container search-container">
      <Outlet />
    </main>
  );
}
