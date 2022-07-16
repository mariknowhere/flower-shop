import React, {FC} from 'react';
import styles from './HamburgerMenu.module.scss';
import classNames from "classnames";
import {IHamburgerMenuProps} from "./HamburgerMenuTypes";
import Image from "../image/Image";
import Title from "../title/Title";
import {TitleVariantEnum} from "../title/TitleTypes";
import Text from "../text/Text";
import {TextVariantEnum} from "../text/TextTypes";
import Social from "../social/Social";
import Circle from "../circle/Circle";

const HamburgerMenu: FC<IHamburgerMenuProps> = ({
  menuActive,
  setMenuActive,
  header,
  geo,
  schedule,
  mobile,
  email,
  id,
  isShopOpen,
}) => {
  const onMenuClickHandler = () => setMenuActive(!menuActive);

  return (
    <div className={classNames(styles['hamburger-menu'], { [styles['hamburger-menu-active']]: menuActive })} onClick={onMenuClickHandler} >
      <div className={classNames(styles['hamburger-menu-overlay'], {
        [styles['hamburger-menu-overlay-open']]: menuActive,
        [styles['hamburger-menu-overlay-close']]: !menuActive
      })} />
      <div className={styles['hamburger-menu-content']} onClick={event => event.stopPropagation()} >
        <div className={styles['hamburger-menu-header']}>
          <Image {...header.phoneImage} className={styles['hamburger-menu-phone']} />
          <Title children={header.title} variant={TitleVariantEnum.H3} className={styles['hamburger-menu-title']} />
          <Image {...header.closeImage} onClick={onMenuClickHandler} className={styles['hamburger-menu-close-icon']} />
        </div>
        <div className={styles['hamburger-menu-body']}>
          <div className={styles['hamburger-menu-list']}>
            <div className={styles['hamburger-menu-item']}>
              <Image {...geo.geoImage} className={styles['hamburger-menu-item-image']} />
              <Social id={id} text={geo.geoText} href={geo.geoHref} className={styles['hamburger-menu-item-geo']} />
            </div>
            <div className={styles['hamburger-menu-item']}>
              <Image {...schedule.scheduleImage} className={styles['hamburger-menu-item-image']} />
              <Text children={schedule.dayText} variant={TextVariantEnum.M} className={styles['hamburger-menu-item-hours']} />
              <Circle isShopOpen={isShopOpen} className={styles['hamburger-menu-item-circle']} />
              <Text children={schedule.hoursText} variant={TextVariantEnum.M} className={styles['hamburger-menu-item-hours']} />
            </div>
            <div className={styles['hamburger-menu-item']}>
              <Image {...mobile.mobilePhoneImage} className={styles['hamburger-menu-item-image']} />
              <Social text={mobile.mobilePhoneText} href={mobile.mobilePhoneHref} className={styles['hamburger-menu-item-mobile']} id={id} />
            </div>
            <div className={styles['hamburger-menu-item']}>
              <Image {...email.emailImage} className={styles['hamburger-menu-item-image']} />
              <Social text={email.emailText} href={email.emailHref} className={styles['hamburger-menu-item-email']} id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
