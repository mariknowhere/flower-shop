import React, {FC} from 'react';
import {INavigatorProps} from "./NavigatorTypes";
import Title from "../title/Title";
import styles from './Navigator.module.scss';
import {Link} from "react-router-dom";
import Image from "../image/Image";

const Navigator: FC<INavigatorProps> = ({ socialBackImage, socialBackText, title }) => {
  return (
    <div className={styles.navigator}>
      <div className={styles['navigator-container']}>
        <div className={styles['navigator-image-wrapper']}>
          <Link to={socialBackImage.href} className={styles['navigator-image']} children={<Image {...socialBackImage.image} />} />
        </div>
        <div className={styles['navigator-text']}>
          <Link to={socialBackText.href} className={styles['navigator-link']}>{socialBackText.text}</Link>
          <Title children={title} className={styles['navigator-title']} />
        </div>
      </div>
    </div>
  );
};

export default Navigator;
