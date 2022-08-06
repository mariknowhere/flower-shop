import React, {FC} from 'react';
import styles from "./NavBarItem.module.scss";
import {Link} from "react-router-dom";
import {INavBarItemProps} from "./NavBarItemTypes";
import classNames from "classnames";

const NavBarItem: FC<INavBarItemProps> = ({ href, text, className, onClick }) => {
  return (
    <Link to={href} >
      <li onClick={onClick} className={classNames(className, styles['navbar-item'])}>
        {text}
      </li>
    </Link>
  );
};

export default NavBarItem;
