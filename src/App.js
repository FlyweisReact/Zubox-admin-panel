/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./utils/utils";
import routes from "./Routes";
import { ReactNotifications } from "react-notifications-component";

const App = () => {
  return (
    <BrowserRouter>
      <ReactNotifications />
      <ScrollToTop />
      <Routes>
        {routes.map((routeGroup, index) => {
          const Layout = routeGroup.layout;
          if (Layout) {
            return (
              <Route element={<Layout />} key={`layoutRoute${index}`}>
                {routeGroup.routes.map((route) => (
                  <Route
                    path={route.path}
                    element={route.element}
                    key={`route${route.path}`}
                  />
                ))}
              </Route>
            );
          } else {
            return routeGroup.routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={`route-without-layout${route.path}`}
              />
            ));
          }
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
