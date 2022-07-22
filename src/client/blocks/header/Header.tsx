import React, {FC} from 'react';
import styles from './Header.module.scss';
import Image from "../../components/image/Image";
import {IHeaderProps} from "./HeaderTypes";
import Search from "../../components/search/Search";
import Social from "../../components/social/Social";

const Header: FC<IHeaderProps> = ({ image, search, socials, socialNumbers  }) => {
  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <div className={styles['header-wrapper']}>
          <div className={styles['header-logo']}>
            <Image {...image} className={styles['header-image']} />
          </div>
          <div className={styles['header-image-wrapper']}>
            <Search {...search} />
          </div>
          <div className={styles['header-socials-wrapper']}>
            {socials.map((social) => (
              <Social {...social} key={social.id} />
            ))}
          </div>
          <div className={styles['header-socials-number-wrapper']}>
            {socialNumbers.map((social) => (
              <Social
                {...social}
                className={styles['header-social-number']}
                classNameImage={styles['header-social-number-image']}
                key={social.id}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
