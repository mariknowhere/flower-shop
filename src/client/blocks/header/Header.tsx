import React, {FC, useContext, useState} from 'react';
import styles from './Header.module.scss';
import Image from "../../components/image/Image";
import {IHeaderProps} from "./HeaderTypes";
import Search from "../../components/search/Search";
import SecondaryButton from "../../components/button/secondaryButton/SecondaryButton";
import {SecondaryButtonEnum} from "../../components/button/secondaryButton/SecondaryButtonTypes";
import {Link, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../constants/routes";
import {CATALOG_BUTTON_TEXT} from "../../constants/header";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import AuthPage from "../../pages/auth/AuthPage";
import Container from "../../components/container/Container";
import {CursorVariantEnum, DirectionVariantEnum} from "../../components/container/ContainerTypes";

const Header: FC<IHeaderProps> = observer(({
  image,
  search,
  basket,
  signInImage,
  logOutImage,
  adminImage,
}) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [isMenuActive, setMenuActive] = useState(false);

  const onButtonClick = () => {
    setMenuActive(!isMenuActive);
    navigate(LOGIN_ROUTE);
  };

  const onAdminButtonClick = () => navigate(ADMIN_ROUTE);

  const onLogOutButtonClick = () => {
    user.setUser({});
    user.setAuth(false);
  };

  return (
    <header className={styles.header}>
      <AuthPage isMenuActive={isMenuActive} setMenuActive={setMenuActive} />
      <Container className={styles['header-container']} direction={DirectionVariantEnum.Row} cursor={CursorVariantEnum.Default}>
        <div className={styles['header-logo-wrapper']}>
          <Link to={SHOP_ROUTE}>
            <Image {...image} className={styles['header-logo']} />
          </Link>
        </div>
        <Link to={SHOP_ROUTE}>
          <SecondaryButton
            buttonText={CATALOG_BUTTON_TEXT}
            className={styles['header-button']}
            type={SecondaryButtonEnum.Secondary}
          />
        </Link>
        <div className={styles['header-search']}>
          <Search {...search} />
        </div>
        {user.isAuth ? (
          <>
            <div className={styles['header-image-wrapper']}>
              <Image {...adminImage} className={styles['header-image']} onClick={onAdminButtonClick} />
            </div>
            <div className={styles['header-image-wrapper']}>
              <Image {...logOutImage} className={styles['header-image']} onClick={onLogOutButtonClick} />
            </div>
          </>
        ) : (
          <div onClick={onButtonClick} className={styles['header-image-wrapper']}>
            <Image {...signInImage} className={styles['header-image']} />
          </div>
        )}
        <Link to={BASKET_ROUTE}>
          <div className={styles['header-image-wrapper']}>
            <Image {...basket} className={styles['header-image']} />
          </div>
        </Link>
      </Container>
    </header>
  );
});

export default Header;
