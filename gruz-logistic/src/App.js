import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./components/styles/index.css";
import Services from "./components/services/Services";
import About from "./components/about/About";
import WhyUs from "./components/whyUs/WhyUs";
import Contact from "./components/contact/Contact";
import Partnership from "./components/partnership/Partnership";
import { AllAppContextProvider } from "./context/AllAppContext";

// Creating Layout for children pages
const Layout = () => {
  return (
    <AllAppContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </AllAppContextProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      ,
      {
        path: "/partnership",
        element: <Partnership />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/whyUs",
        element: <WhyUs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
