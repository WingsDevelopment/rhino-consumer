import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { tagRouteObject } from "../features/tag/routes/TagRoutes";

// ----------------------------------------------------------------------

export default function RRouter() {
  return useRoutes([
    {
      path: "",
      children: [{ path: "", element: <Home /> }],
    },
    { ...tagRouteObject },
  ]);
}

const Home = lazy(() => import("../pages/Home"));
