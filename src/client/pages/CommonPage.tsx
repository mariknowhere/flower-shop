import React, {FC} from 'react';
import Header from "../blocks/header/Header";
import {store} from "../store/store";
import NavBar from "../blocks/navBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "../router/AppRouter";

const CommonPage: FC = () => {
  const { headerData, navbarData } = store;

  return (
    <BrowserRouter>
      <NavBar {...navbarData} />
      <Header {...headerData} />
      <AppRouter />
    </BrowserRouter>
  );
};

export default CommonPage;
