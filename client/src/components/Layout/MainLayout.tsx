import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";

export default function MainLayout() {
  return (
    <>
      <header className="fixed inset-x-0 top-0">
        <Nav />
      </header>
      <Outlet />
    </>
  );
}
