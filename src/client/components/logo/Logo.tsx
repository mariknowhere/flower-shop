import React, {FC} from 'react';
import classNames from "classnames";
import styles from "./Logo.module.scss";
import {Link} from "react-router-dom";
import {SHOP_ROUTE} from "../../constants/routes";
import Image from "../image/Image";
import {ILogoProps} from "./LogoTypes";

const Logo: FC<ILogoProps> = ({ className, image }) => {
  return (
    <div className={classNames(className, styles['logo-wrapper'])}>
    <Link to={SHOP_ROUTE}>
        <Image {...image} className={styles['logo']} />
    </Link>
    </div>
  );
};

export default Logo;
