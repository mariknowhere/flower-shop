import React, {FC} from 'react';
import styles from "./Social.module.scss";
import Image from "../image/Image";
import {ISocialProps} from "./SocialTypes";
import classNames from "classnames";

const Social: FC<ISocialProps> = ({
  href,
  image,
  className,
  classNameImage,
  id,
  number ,
}) => {
  return (
    <a target='_blank' href={href} className={classNames(className, styles['social'])} rel='noreferrer' key={id}>
      {image && <Image {...image} className={classNameImage}/>}
      {number}
    </a>
  );
};

export default Social;