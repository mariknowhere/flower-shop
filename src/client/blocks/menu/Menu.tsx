import React, {FC} from 'react';
import {IMenuProps} from "./MenuTypes";
import styles from './Menu.module.scss';
import Social from "../../components/social/Social";

const Menu: FC<IMenuProps> = ({ items, social }) => {
  return (
    <div className={styles.menu}>
      <div className={styles['menu-container']}>
        <div className={styles['menu-wrapper']}>
          <ul className={styles['menu-list']}>
            {items.map((item) => (
              <li className={styles['menu-list-item-wrapper']}>
                <Social {...item} className={styles['menu-list-item']} />
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