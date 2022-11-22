import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// ----------------------------------------------------------------------

export default function RRouter() {
  return useRoutes([
    {
      path: "",
      children: [{ path: "", element: <Home /> }],
    },
  ]);
}

const Home = lazy(() => import("../pages/Home"));
