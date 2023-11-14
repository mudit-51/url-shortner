import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./pages/Root";
import RedirectPage from "./pages/Redirect"
import Error from "./pages/Error";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/error",
    element: <Error />,
  },{
    path: "*",
    element: <RedirectPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
