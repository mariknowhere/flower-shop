import React, {FC, useContext} from 'react';
import {Context} from "../../../index";
import {IAuthPageProps} from "./AuthPageTypes";
import styles from './AuthPage.module.scss';
import classNames from "classnames";
import HamburgerMenu from "../../components/hamburgerMenu/HamburgerMenu";

const AuthPage: FC<IAuthPageProps> = ({ setMenuActive, isMenuActive }) => {
  const { user } = useContext(Context);
  const { hamburgerMenu } = user;
  const onMenuClickHandler = () => setMenuActive ? setMenuActive(!isMenuActive) : console.log('ERROR');

  return (
    <div className={classNames(styles['hamburger-menu'], { [styles['hamburger-menu-active']]: isMenuActive })} onClick={onMenuClickHandler}>
      <HamburgerMenu {...hamburgerMenu} menuActive={isMenuActive} setMenuActive={setMenuActive} />
    </div>
  );
};

export default AuthPage;