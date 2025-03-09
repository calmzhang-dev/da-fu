import { lazy, Suspense } from "react";
const load = (children: any) => (
  <Suspense fallback={<></>}>{children}</Suspense>
);
const Home = lazy(() => import("../pages/Home"));
const Basic = lazy(() => import("../pages/Basic"));
const Activity = lazy(() => import("../pages/Activity"));
const Assembly = lazy(() => import("../pages/Assembly"));
const Care = lazy(() => import("../pages/Care"));
const Demeanour = lazy(() => import("../pages/Demeanour"));
const Handle = lazy(() => import("../pages/Handle"));
const Highlights = lazy(() => import("../pages/Highlights"));
const System = lazy(() => import("../pages/System"));
import { Navigate, useRoutes } from "react-router-dom";

const routeList = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        key: "Home",
        element: load(<Home />),
      },
      {
        path: "/basic",
        key: "Basic",
        element: load(<Basic />),
      },
      {
        path: "/activity",
        key: "Activity",
        element: load(<Activity />),
      },
      {
        path: "/assembly",
        key: "Assembly",
        element: load(<Assembly />),
      },
      {
        path: "/care",
        key: "Care",
        element: load(<Care />),
      },
      {
        path: "/demeanour",
        key: "Demeanour",
        element: load(<Demeanour />),
      },
      {
        path: "/handle",
        key: "Handle",
        element: load(<Handle />),
      },
      {
        path: "/highlights",
        key: "Highlights",
        element: load(<Highlights />),
      },
      {
        path: "/system",
        key: "System",
        element: load(<System />),
      },
    ],
  }
];

const RenderRouter = () => {
  const element = useRoutes(routeList);
  return element;
};

export const localRouters = routeList;
export default RenderRouter;
