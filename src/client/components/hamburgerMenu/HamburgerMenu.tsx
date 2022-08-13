import React, {FC, useState, KeyboardEvent, useContext} from 'react';
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
import Input from "../input/Input";
import {InputTypeEnum} from "../input/InputTypes";
import {login, registration} from "../../http/userAPI";
import {REGISTRATION_ROUTE, SHOP_ROUTE} from "../../constants/routes";
import {Link, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

const HamburgerMenu: FC<IHamburgerMenuProps> = observer(({
  menuActive,
  setMenuActive,
  header,
  body,
  auth,
  isShopOpen,
}) => {
  const { user } = useContext(Context);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const onMenuClickHandler = () => setMenuActive ? setMenuActive(!menuActive) : console.error('ERROR');

  const onEmailChangeHandler = (event: KeyboardEvent<HTMLInputElement>) => setEmail(event.target.value)

  const onPasswordChangeHandler = (event: KeyboardEvent<HTMLInputElement>) => setPassword(event.target.value);
  let data;

  const onLoginClick = async () => {
    try {
      data = await login(email, password)
      user.setUser(user)
      user.setAuth(true)
    } catch (error: Error | any) {
      alert(error.response.data.message)
    }

    data = await registration(email, password)

  }

  const onRegistrationClick = async () => {
    try {
      data = await registration(email, password);
      user.setUser(user);
      user.setAuth(true);
      navigate(SHOP_ROUTE);
      setMenuActive ? setMenuActive(!menuActive) : console.error('ERROR');
    } catch (error: Error | any) {
      alert(error.response.data.message)
    }
  }

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
              <Input {...auth.login} value={email} onChange={onEmailChangeHandler} />
              <Input
                {...auth.password}
                type={InputTypeEnum.Password}
                value={password}
                onChange={onPasswordChangeHandler}
              />
              <div className={styles['hamburger-menu-checkbox']}>
                <input
                  name={auth.checkbox.name}
                  id={auth.checkbox.name}
                  type={InputTypeEnum.Checkbox}
                  className={styles['hamburger-menu-checkbox-input']}
                />
                <label className={styles['hamburger-menu-checkbox-label']} htmlFor={auth.checkbox.name}>
                  {auth.checkbox.text}
                </label>
              </div>
              <SecondaryButton
                buttonText={auth.buttonText}
                className={styles['hamburger-menu-button']}
                onClick={onLoginClick}
              />
              <Link to={REGISTRATION_ROUTE}>
                <SecondaryButton
                  buttonText={auth.secondaryButtonText}
                  className={styles['hamburger-menu-button']}
                  type={SecondaryButtonEnum.Secondary}
                  onClick={onRegistrationClick}
                />
              </Link>
            </form>
          </div>
        )}
      </div>
    </div>
  );
});

export default HamburgerMenu;
