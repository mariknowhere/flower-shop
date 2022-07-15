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
          <div>
            <Search {...search} />
          </div>
          {socials.map((social) => (
            <Social {...social} />
          ))}
          {socialNumbers.map((social) => (
            <Social {...social} className={styles['header-social-number']} />
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
