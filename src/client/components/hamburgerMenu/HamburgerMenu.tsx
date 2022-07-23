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
import SecondaryButton from "../button/secondaryButton/SecondaryButton";
import {SecondaryButtonEnum} from "../button/secondaryButton/SecondaryButtonTypes";

const HamburgerMenu: FC<IHamburgerMenuProps> = ({
  menuActive,
  setMenuActive,
  header,
  body,
  auth,
  isShopOpen,
}) => {
  const onMenuClickHandler = () => setMenuActive ? setMenuActive(!menuActive) : console.error('ERROR');

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
        {body && (
          <div className={styles['hamburger-menu-body']}>
            <div className={styles['hamburger-menu-list']}>
              <div className={styles['hamburger-menu-item']}>
                <Image {...body.geo.geoImage} className={styles['hamburger-menu-item-image']}/>
                <Social text={body.geo.geoText} href={body.geo.geoHref} className={styles['hamburger-menu-item-geo']}/>
              </div>
              <div className={styles['hamburger-menu-item']}>
                <Image {...body.schedule.scheduleImage} className={styles['hamburger-menu-item-image']}/>
                <Text children={body.schedule.dayText} variant={TextVariantEnum.M}
                      className={styles['hamburger-menu-item-hours']}/>
                <Circle isShopOpen={isShopOpen} className={styles['hamburger-menu-item-circle']}/>
                <Text children={body.schedule.hoursText} variant={TextVariantEnum.M}
                      className={styles['hamburger-menu-item-hours']}/>
              </div>
              <div className={styles['hamburger-menu-item']}>
                <Image {...body.mobile.mobilePhoneImage} className={styles['hamburger-menu-item-image']}/>
                <Social text={body.mobile.mobilePhoneText}
                        href={body.mobile.mobilePhoneHref}
                        className={styles['hamburger-menu-item-mobile']}
                />
              </div>
              <div className={styles['hamburger-menu-item']}>
                <Image {...body.email.emailImage} className={styles['hamburger-menu-item-image']}/>
                <Social
                  text={body.email.emailText}
                  href={body.email.emailHref}
                  className={styles['hamburger-menu-item-email']}
                />
              </div>
            </div>
          </div>
        )}
        {auth && (
          <div className={styles['hamburger-menu-auth']}>
            <form>
              <div className={styles['hamburger-menu-input-wrapper']}>
                <input
                  type={auth.login.type}
                  name={auth.login.name}
                  placeholder={auth.login.placeholder}
                  className={styles['hamburger-menu-input']}
                />
                <Image {...auth.login.image} className={styles['hamburger-menu-icon']} />
              </div>
              <div className={styles['hamburger-menu-input-wrapper']}>
                <input
                  type={auth.password.type}
                  name={auth.password.name}
                  placeholder={auth.password.placeholder}
                  className={styles['hamburger-menu-input']}
                />
                <Image {...auth.password.image} className={styles['hamburger-menu-icon']} />
              </div>
              <div className={styles['hamburger-menu-checkbox']}>
                <input
                  name={auth.checkbox}
                  id={auth.checkbox}
                  type="checkbox"
                  className={styles['hamburger-menu-checkbox-input']}
                />
                <label className={styles['hamburger-menu-checkbox-label']} htmlFor={auth.checkbox}>{auth.checkbox}</label>
              </div>
              <SecondaryButton buttonText={auth.buttonText} className={styles['hamburger-menu-button']}  />
              <SecondaryButton
                buttonText={auth.secondaryButtonText}
                className={styles['hamburger-menu-button']}
                type={SecondaryButtonEnum.Secondary}
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
