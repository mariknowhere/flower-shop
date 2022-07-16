import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "./routes";
import {SHOP_ROUTE} from "../constants/routes";

const AppRouter = () => {
  const isAuth = false;

  return (
    <Routes>
      {isAuth && privateRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
        ))}
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path="/*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;