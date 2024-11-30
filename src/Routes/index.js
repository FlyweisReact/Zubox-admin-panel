/** @format */

import DefaultLayout from "../Layout/DefaultLayout";
import Category from "../pages/Category/Category";
import Cell from "../pages/Cell/Cell";
import CountryCity from "../pages/Country & City/CountryCity";
import Dashboard from "../pages/Dashboard/Dashboard";
import Forgotpassword from "../pages/Login/Forgotpassword";
import Login from "../pages/Login/Login";
import Logo from "../pages/Logo/Logo";
import Places from "../pages/Places/Places";
import CellsDetail from "../pages/CellsDetail/CellsDetail";
import Sitemap from "../pages/SiteMap/Sitemap";
import Users from "../pages/Users/Users";
import AboutUs from "../pages/AboutUs/AboutUs";
import SliderVideo from "../pages/SliderVideo/SliderVideo";
import UserCells from "../pages/Users/UserCells";
import Background from "../pages/Background/Background";

const routes = [
  {
    layout: null,
    routes: [
      {
        element: <Login />,
        path: "/",
      },
      {
        element: <Forgotpassword />,
        path: "/forgetpassword",
      },
    ],
  },
  {
    layout: DefaultLayout,
    routes: [
      {
        element: <Dashboard />,
        path: "/dashboard",
      },
      {
        element: <Logo />,
        path: "/logo",
      },
      {
        element: <Cell />,
        path: "/cell",
      },
      {
        element: <Places />,
        path: "/places",
      },
      {
        element: <CountryCity />,
        path: "/country&city",
      },
      {
        element: <Category />,
        path: "/skill-category",
      },
      {
        element: <CellsDetail />,
        path: "/cells-details",
      },
      {
        element: <Sitemap />,
        path: "/site-map",
      },
      {
        element: <Users />,
        path: "/users",
      },
      {
        element: <AboutUs />,
        path: "/about-us",
      },
      {
        element: <SliderVideo />,
        path: "/slider-video",
      },
      {
        element: <UserCells />,
        path: "/user-cells",
      },
      {
        element: <Background />,
        path: "/website-background",
      },
    ],
  },
];

export default routes;
