import React, {FC, useContext} from 'react';
import Title from "../../components/title/Title";
import {Context} from "../../../index";
import Image from "../../components/image/Image";
import Text from "../../components/text/Text";
import {TextVariantEnum} from "../../components/text/TextTypes";
import {TitleVariantEnum} from "../../components/title/TitleTypes";
import styles from './AboutPage.module.scss';
import Social from "../../components/social/Social";

const AboutPage: FC = () => {
  const { about } = useContext(Context)

  const { title, cards } = about;

  return (
    <div className={styles.about}>
      <div className={styles['about-title-wrapper']}>
        <Title children={title} className={styles['about-title']} variant={TitleVariantEnum.H1} />
      </div>
      {cards.map(({ id, title, address, image, icon, hours, description, review, reviewCount, social }) => (
        <div key={id} className={styles['about-card']}>
          <div className={styles['about-card-image']}>
            <Image {...image} />
          </div>
          <div className={styles['about-card-info']}>
            <Title children={title} variant={TitleVariantEnum.H3} className={styles['about-card-info-title']} />
            <div className={styles['about-card-info-body']}>
              <Image {...icon} />
              <Text children={address} variant={TextVariantEnum.S} className={styles['about-card-info-address']} />
            </div>
            <Text children={hours} variant={TextVariantEnum.S} className={styles['about-card-info-hours']} />
            <Text children={description} variant={TextVariantEnum.M} className={styles['about-card-info-description']} />
            <div className={styles['about-card-info-review-wrapper']}>
              <Social {...review} id={id} className={styles['about-card-info-review']} />
              <span className={styles['about-card-info-review-count']}>{reviewCount}</span>
            </div>
          </div>
          <div>
            <button className={styles['about-card-button']}>
              <Image {...social} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;