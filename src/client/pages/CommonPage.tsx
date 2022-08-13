import React, {FC, useContext, useEffect, useState} from 'react';
import Header from "../blocks/header/Header";
import {store} from "../store/store";
import NavBar from "../blocks/navBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "../router/AppRouter";
import ShopTypes from "./shop/shopTypes/ShopTypes";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {check} from "../http/userAPI";
import Text from "../components/text/Text";

const CommonPage: FC = observer(() => {
  const { headerData, navbarData } = store;
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setUser(true);
      user.setAuth(true);
    }).finally(() => setLoading(false))
  }, []);

  if (loading) {
    return <Text children={'ЗАГРУЗКА'} />
  }

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
