import React, {FC, useContext, useState} from 'react';
import {Context} from "../../../index";
import Text from "../../components/text/Text";
import styles from './AboutPage.module.scss';
import HamburgerMenu from "../../components/hamburgerMenu/HamburgerMenu";
import Navigator from "../../components/navigator/Navigator";
import AboutShop from "./aboutShop/AboutShop";

const AboutPage: FC = () => {
  const { about } = useContext(Context)
  const [menuActive, setMenuActive] = useState(false);
  const onClickHandler = () => setMenuActive(!menuActive);
  const { shops, hamburgerMenu, navigator, title } = about;

  const date = new Date();
  const currentHour = date.getHours()
  const isShopOpen = currentHour >= 10 && currentHour < 19;

  return (
    <div className={styles.about}>
      <HamburgerMenu {...hamburgerMenu} menuActive={menuActive} setMenuActive={setMenuActive} isShopOpen={isShopOpen} />
      <Navigator {...navigator} />
      <div className={styles['about-container']}>
        <Text children={title} className={styles['about-title']} />
        {shops.map((shop) => (
          <AboutShop {...shop} onClick={onClickHandler} isShopOpen={isShopOpen} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;