import React, {FC} from 'react';
import styles from "./AboutShop.module.scss";
import Image from "../../../components/image/Image";
import Social from "../../../components/social/Social";
import Text from "../../../components/text/Text";
import {TextVariantEnum} from "../../../components/text/TextTypes";
import Circle from "../../../components/circle/Circle";
import {IAboutShopProps} from "./AboutShopTypes";

const AboutShop: FC <IAboutShopProps> = ({
  id,
  image,
  title,
  geo,
  hours,
  shoppingCenter,
  review,
  social,
  onClick,
  isShopOpen,
}) => {
  return (
    <div key={id} className={styles['about-shop']}>
      <div className={styles['about-shop-image']}>
        <Image {...image} />
      </div>
      <div className={styles['about-shop-info']}>
        <Social text={title.text} href={title.href} className={styles['about-shop-info-title']} />
        <div className={styles['about-shop-info-body']}>
          <Image {...geo.image} />
          <Text children={geo.text} variant={TextVariantEnum.S} className={styles['about-shop-info-address']} />
        </div>
        <div className={styles['about-shop-info-hours-wrapper']}>
          <Circle isShopOpen={isShopOpen} />
          <Text children={hours} variant={TextVariantEnum.S} className={styles['about-shop-info-hours']} />
        </div>
        <Social text={shoppingCenter.text} href={shoppingCenter.href} className={styles['about-shop-info-description']} />
        <div className={styles['about-shop-info-review-wrapper']}>
          <Social {...review.social} className={styles['about-shop-info-review']} />
          <span className={styles['about-shop-info-review-count']}>{review.count}</span>
        </div>
      </div>
      <div>
        <button className={styles['about-shop-button']} onClick={onClick}>
          <Image {...social} />
        </button>
      </div>
    </div>
  );
};

export default AboutShop;
