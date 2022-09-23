import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  <div>
    <Header />
    <div>
      <Outlet />
    </div>
  </div>
}