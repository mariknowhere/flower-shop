import React, {FC} from 'react';
import styles from "./NavBarItem.module.scss";
import {Link} from "react-router-dom";
import {INavBarItemProps} from "./NavBarItemTypes";

const NavBarItem: FC<INavBarItemProps> = ({ href, text }) => {
  return (
    <li className={styles['navbar-item-wrapper']}>
      <Link to={href} className={styles['navbar-item']}>{text}</Link>
    </li>
  );
};

export default NavBarItem;
