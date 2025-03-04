import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import BodyComp from "./components/BodyComp";
import RestaurantMenu from "./components/RestaurantMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * lazy loading -- to reduce the bundle size or fast loading on browser
 * split into small small chunks and when we need that component then we load that otherwise it wouldn't be load into the browser
 *
 * chunking
 * codespliting
 * dynamic bundling
 * lazy loading
 * on demand loading
 * dynamic importing
 *
 **/

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComp />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
