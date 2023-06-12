import { Outlet } from "react-router-dom";

import Navigation from "../components/navigation/Navigation";

export default function RootLayout() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <Outlet />
    </div>
  );
}
