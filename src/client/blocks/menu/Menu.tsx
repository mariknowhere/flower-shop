import React, {FC, useContext, useState} from 'react';
import {IMenuProps} from "./MenuTypes";
import styles from './Menu.module.scss';
import Social from "../../components/social/Social";
import {Link} from "react-router-dom";
import SecondaryButton from "../../components/button/secondaryButton/SecondaryButton";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import AuthPage from "../../pages/auth/AuthPage";

const adminButtonText = 'Админ панель';
const signOutButtonText = 'Выйти';
const signInButtonText = 'Авторизация';

const Menu: FC<IMenuProps> = observer(({ items, social }) => {
  const { user } = useContext(Context);
  const [isMenuActive, setMenuActive] = useState(false);

  const onButtonClick = () => {
    user.setAuth(true);
    setMenuActive(!isMenuActive);
  };

  return (
    <div className={styles.menu}>
      {isMenuActive && <AuthPage isMenuActive={isMenuActive} setMenuActive={setMenuActive} />}
      <div className={styles['menu-container']}>
        <div className={styles['menu-wrapper']}>
          <ul className={styles['menu-list']}>
            {items.map(({ href, text, id }) => (
              <li className={styles['menu-list-item-wrapper']} key={id}>
                <Link to={href} className={styles['menu-list-item']}>{text}</Link>
              </li>
            ))}
          </ul>
          {user.isAuth ? (
            <>
              <SecondaryButton buttonText={adminButtonText} className={styles['menu-button']} />
              <SecondaryButton buttonText={signOutButtonText} className={styles['menu-button']} />
            </>
          ) : (
            <SecondaryButton buttonText={signInButtonText} className={styles['menu-button']} onClick={onButtonClick} />
          )}
          <Social {...social} />
        </div>
      </div>
    </div>
  );
});

export default Menu;
