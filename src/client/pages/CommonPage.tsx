import React, {FC} from 'react';
import Header from "../blocks/header/Header";
import {store} from "../store/store";
import NavBar from "../blocks/navBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "../router/AppRouter";
import ShopTypes from "./shop/shopTypes/ShopTypes";
import {observer} from "mobx-react-lite";

const CommonPage: FC = observer(() => {
  const { headerData, navbarData } = store;

  return (
    <BrowserRouter>
      <NavBar {...navbarData} />
      <Header {...headerData} />
      <ShopTypes />
      <AppRouter />
    </BrowserRouter>
  );
});

export default CommonPage;
