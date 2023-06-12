import { Outlet } from "react-router-dom";

export default function MoviesLayout() {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
}
