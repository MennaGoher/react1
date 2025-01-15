import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Start from "./Components/Start/Start";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

let x = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Start /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
