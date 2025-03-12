import { Outlet } from "react-router"
import MainNavigation from "../componenets/MainNavigation"

export default function RootLayout() {
  return (
    <>
    <MainNavigation/>
    <main >
    <Outlet/>
    </main>
    </>
  );
}

