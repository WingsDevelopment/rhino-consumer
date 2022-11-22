import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const CreateTagPage = lazy(() => import("..//pages/Create/CreateTagPage"));
const UpdateTagPage = lazy(() => import("..//pages/Update/UpdateTagPage"));
const DetailsTagPage = lazy(() => import("..//pages/Details/DetailsTagPage"));
const TagIndexPage = lazy(() => import("..//pages/Index/TagIndexPage"));

const TagRoot = `/tag`;
export const TagRoutes = {
  root: TagRoot,
  create: `${TagRoot}/create`,
  update: `${TagRoot}/update`,
  details: `${TagRoot}/details`,
  index: `${TagRoot}/index`,
};

export const tagRouteObject: RouteObject = {
  path: TagRoutes.root,
  children: [
    { path: TagRoutes.create, element: <CreateTagPage /> },
    { path: TagRoutes.update + "/:id", element: <UpdateTagPage /> },
    { path: TagRoutes.details + "/:id", element: <DetailsTagPage /> },
    { path: TagRoutes.index, element: <TagIndexPage /> },
  ],
};
