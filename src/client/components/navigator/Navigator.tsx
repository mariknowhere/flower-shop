import React, {FC} from 'react';
import {INavigatorProps} from "./NavigatorTypes";
import Title from "../title/Title";
import styles from './Navigator.module.scss';
import {Link} from "react-router-dom";
import Image from "../image/Image";
import Container from "../container/Container";
import {DirectionVariantEnum} from "../container/ContainerTypes";

const Navigator: FC<INavigatorProps> = ({ socialBackImage, socialBackText, title }) => {
  return (
    <div className={styles.navigator}>
      <Container className={styles['navigator-container']} direction={DirectionVariantEnum.Row}>
        <div className={styles['navigator-image-wrapper']}>
          <Link to={socialBackImage.href} className={styles['navigator-image']} children={<Image {...socialBackImage.image} />} />
        </div>
        <div className={styles['navigator-text']}>
          <Link to={socialBackText.href} className={styles['navigator-link']}>{socialBackText.text}</Link>
          <Title children={title} className={styles['navigator-title']} />
        </div>
      </Container>
    </div>
  );
};

export default Navigator;
