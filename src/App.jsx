import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Define the routes where you do not want to show the Footer
  const hideFooterRoutes = ["/components"];

  // Determine if the Footer should be hidden based on the current route
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;
