import React, {FC} from 'react';
import {IFooterProps} from "./FooterTypes";
import styles from './Footer.module.scss';
import Container from "../../components/container/Container";
import Logo from "../../components/logo/Logo";
import Text from "../../components/text/Text";
import {TextVariantEnum} from "../../components/text/TextTypes";
import {Link} from "react-router-dom";
import {DirectionVariantEnum} from "../../components/container/ContainerTypes";
import Social from "../../components/social/Social";

const Footer: FC<IFooterProps> = ({ image, links, description, socials }) => {
  return (
    <footer className={styles.footer}>
      <Container direction={DirectionVariantEnum.Row} className={styles['footer-container']}>
        <div className={styles['footer-item']}>
          <div className={styles['footer-logo']}>
            <Logo image={image} />
          </div>
          <div>
            <Text children={description.first} variant={TextVariantEnum.S} className={styles['footer-description']} />
            <Text children={description.second} variant={TextVariantEnum.S} className={styles['footer-description']} />
            <Text children={description.third} variant={TextVariantEnum.S} className={styles['footer-description']} />
            <Text children={description.fourth} variant={TextVariantEnum.S} className={styles['footer-description']} />
            <Text children={description.fifth} variant={TextVariantEnum.S} className={styles['footer-description']} />
          </div>
        </div>
        <div className={styles['footer-links']}>
          {links.map(({ href, id, text }) => (
            <Link to={href} key={id}>
              <Text children={text} className={styles['footer-link']} />
            </Link>
          ))}
        </div>
        <div>
          <Text children={'Мы в социальных сетях:'} className={styles['footer-text']} />
          {socials.map(({ href, id, image }) => (
            <Social href={href} key={id} image={image} />
          ))}
          <Text children={'Присоединяйтесь!'} className={styles['footer-text']} />
        </div>
        <div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;
