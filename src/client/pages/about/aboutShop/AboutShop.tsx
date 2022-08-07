import React, {FC} from 'react';
import styles from "./AboutShop.module.scss";
import Image from "../../../components/image/Image";
import Social from "../../../components/social/Social";
import Text from "../../../components/text/Text";
import {TextVariantEnum} from "../../../components/text/TextTypes";
import Circle from "../../../components/circle/Circle";
import {IAboutShopProps} from "./AboutShopTypes";
import Button from "../../../components/button/Button";

const AboutShop: FC <IAboutShopProps> = ({
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
    <div className={styles['about-shop']}>
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
        <a href={review.href} target='_blank'>
          <Button
            buttonText={review.text}
            buttonLabel={review.count}
            className={styles['about-shop-info-review']}
            classNameButton={styles['about-shop-info-review-text']}
          />
        </a>
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
