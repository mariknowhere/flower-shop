import React, {FC} from 'react';
import Title from "../../../components/title/Title";
import {TitleVariantEnum} from "../../../components/title/TitleTypes";
import Image from "../../../components/image/Image";
import styles from './News.module.scss';
import Text from "../../../components/text/Text";
import Button from "../../../components/button/Button";
import {INewsProps} from "./NewsTypes";
import {Link} from "react-router-dom";

const News: FC<INewsProps> = ({ title, date, mainImage, description, review }) => {
  return (
    <div className={styles.news}>
      <Image {...mainImage} className={styles['news-image']} />
      <div className={styles['news-info']}>
        <Title children={title} variant={TitleVariantEnum.H3} />
        <div className={styles['news-date']}>
          <Image {...date.image} />
          <Text children={`Опубликовано: ${date.text}`} className={styles['news-date-text']} />
        </div>
        <Text children={description} className={styles['news-description']} />
        <Link to={review.href} children={<Button button={review} className={styles['news-review']} />} />
      </div>
    </div>
  );
};

export default News;
