import React, {FC} from 'react';
import './CommonPage.css';
import Header from "../blocks/header/Header";
import {store} from "../store/store";
import Menu from "../blocks/menu/Menu";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "../router/AppRouter";

const CommonPage: FC = () => {
  const { headerData, menuData } = store;

  return (
    <BrowserRouter>
      <Header {...headerData} />
      <Menu {...menuData} />
      <AppRouter />
    </BrowserRouter>
  );
};

export default CommonPage;
