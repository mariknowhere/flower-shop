import React, {FC} from 'react';
import {INavigatorProps} from "./NavigatorTypes";
import Social from "../social/Social";
import Title from "../title/Title";
import styles from './Navigator.module.scss';
import {Link} from "react-router-dom";

const Navigator: FC<INavigatorProps> = ({ socialBackImage, socialBackText, title }) => {
  return (
    <div className={styles.navigator}>
      <div className={styles['navigator-container']}>
        <div className={styles['navigator-image-wrapper']}>
          <Social {...socialBackImage} className={styles['navigator-image']} />
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
