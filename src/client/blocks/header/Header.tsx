import React, {FC, useContext, useState} from 'react';
import styles from './Header.module.scss';
import Image from "../../components/image/Image";
import {IHeaderProps} from "./HeaderTypes";
import Search from "../../components/search/Search";
import Social from "../../components/social/Social";
import SecondaryButton from "../../components/button/secondaryButton/SecondaryButton";
import {SecondaryButtonEnum} from "../../components/button/secondaryButton/SecondaryButtonTypes";
import {Link, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, SHOP_ROUTE} from "../../constants/routes";
import {CATALOG_BUTTON_TEXT} from "../../constants/header";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import AuthPage from "../../pages/auth/AuthPage";
import {ADMIN_BUTTON_TEXT, SIGN_OUT_BUTTON_TEXT} from "../../constants/navbar";
import Container from "../../components/container/Container";
import {CursorVariantEnum, DirectionVariantEnum} from "../../components/container/ContainerTypes";

const Header: FC<IHeaderProps> = observer(({ image, search, basket, signInImage  }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [isMenuActive, setMenuActive] = useState(false);

  const onButtonClick = () => {
    user.setAuth(true);
    setMenuActive(!isMenuActive);
  };

  const onAdminButtonClick = () => navigate(ADMIN_ROUTE);

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
            <SecondaryButton
              buttonText={ADMIN_BUTTON_TEXT}
              className={styles['header-button']}
              onClick={onAdminButtonClick}
            />
            <SecondaryButton
              buttonText={SIGN_OUT_BUTTON_TEXT}
              className={styles['header-button']}
            />
          </>
        ) : (
          <div onClick={onButtonClick}>
            <Image {...signInImage} className={styles['header-image']} />
          </div>
        )}
        <Social {...basket} className={styles['header-image']} />
      </Container>
    </header>
  );
});

export default Header;
