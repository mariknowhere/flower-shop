import React, {FC, useContext, useState} from 'react';
import Title from "../../components/title/Title";
import {Context} from "../../../index";
import Image from "../../components/image/Image";
import Text from "../../components/text/Text";
import {TextVariantEnum} from "../../components/text/TextTypes";
import {TitleVariantEnum} from "../../components/title/TitleTypes";
import styles from './AboutPage.module.scss';
import Social from "../../components/social/Social";
import HamburgerMenu from "../../components/hamburgerMenu/HamburgerMenu";
import Circle from "../../components/circle/Circle";

const AboutPage: FC = () => {
  const { about } = useContext(Context)
  const [menuActive, setMenuActive] = useState(false);
  const onClickHandler = () => setMenuActive(!menuActive);
  const { title, cards, hamburgerMenu } = about;

  const date = new Date;
  const currentHour = date.getHours()
  const isShopOpen = currentHour >= 10 && currentHour < 19;

  return (
    <div className={styles.about}>
      <HamburgerMenu {...hamburgerMenu} menuActive={menuActive} setMenuActive={setMenuActive} isShopOpen={isShopOpen} />
      <div className={styles['about-title-wrapper']}>
        <Title children={title} className={styles['about-title']} variant={TitleVariantEnum.H1} />
      </div>
      {cards.map(({ id, title, titleHref, address, image, icon, hours, description, descriptionHref, review, reviewCount, social }) => (
        <div key={id} className={styles['about-card']}>
          <div className={styles['about-card-image']}>
            <Image {...image} />
          </div>
          <div className={styles['about-card-info']}>
            <Social text={title} id={id} href={titleHref} className={styles['about-card-info-title']} />
            <div className={styles['about-card-info-body']}>
              <Image {...icon} />
              <Text children={address} variant={TextVariantEnum.S} className={styles['about-card-info-address']} />
            </div>
            <div className={styles['about-card-info-hours-wrapper']}>
              <Circle isShopOpen={isShopOpen} />
              <Text children={hours} variant={TextVariantEnum.S} className={styles['about-card-info-hours']} />
            </div>
            <Social id={id} text={description} href={descriptionHref} className={styles['about-card-info-description']} />
            <div className={styles['about-card-info-review-wrapper']}>
              <Social {...review} id={id} className={styles['about-card-info-review']} />
              <span className={styles['about-card-info-review-count']}>{reviewCount}</span>
            </div>
          </div>
          <div>
            <button className={styles['about-card-button']} onClick={onClickHandler}>
              <Image {...social} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;