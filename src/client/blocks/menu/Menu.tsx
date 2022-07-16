import React, {FC} from 'react';
import {IMenuProps} from "./MenuTypes";
import styles from './Menu.module.scss';
import Social from "../../components/social/Social";
import {Link} from "react-router-dom";

const Menu: FC<IMenuProps> = ({ items, social }) => {
  return (
    <div className={styles.menu}>
      <div className={styles['menu-container']}>
        <div className={styles['menu-wrapper']}>
          <ul className={styles['menu-list']}>
            {items.map(({ href, text, id }) => (
              <li className={styles['menu-list-item-wrapper']}>
                <Link to={href} key={id} className={styles['menu-list-item']}>{text}</Link>
              </li>
            ))}
          </ul>
          <Social {...social} />
        </div>
      </div>
    </div>
  );
};

export default Menu;