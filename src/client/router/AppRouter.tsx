import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "./routes";
import {SHOP_ROUTE} from "../constants/routes";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth && privateRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
        ))}
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path="/*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
});

export default AppRouter;
