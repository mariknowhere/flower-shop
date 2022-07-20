import React, {FC} from 'react';
import {INewProps} from "./NewTypes";
import Title from "../../../components/title/Title";
import {TitleVariantEnum} from "../../../components/title/TitleTypes";
import Image from "../../../components/image/Image";
import styles from './New.module.scss';
import Text from "../../../components/text/Text";
import Button from "../../../components/button/Button";

const New: FC<INewProps> = ({ title, date, id, mainImage, description, review }) => {
  return (
    <div className={styles.new} key={id}>
      <Image {...mainImage} className={styles['new-image']} />
      <div className={styles['new-info']}>
        <Title children={title} variant={TitleVariantEnum.H3} />
        <div className={styles['new-date']}>
          <Image {...date.image} />
          <Text children={`Опубликовано: ${date.text}`} className={styles['new-date-text']} />
        </div>
        <Text children={description} className={styles['new-description']} />
        <Button button={review} className={styles['new-review']} />
      </div>
    </div>
  );
};

export default New;
