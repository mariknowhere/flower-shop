import React, {FC} from 'react';
import {IShopCardProps} from "./ShopCardTypes";
import styles from './ShopCard.module.scss';
import Image from "../../../components/image/Image";
import Text from "../../../components/text/Text";
import {buy} from "../../../constants/shop";
import {TextVariantEnum} from "../../../components/text/TextTypes";
import { useNavigate } from 'react-router-dom'
import {DEVICE_ROUTE} from "../../../constants/routes";


const ShopCard: FC<IShopCardProps> = ({ title, image, price, id }) => {
  const navigate = useNavigate();
  const onClickHandler = () => navigate(`${DEVICE_ROUTE}/${id}`)

  return (
    <div className={styles['shop-card']} key={id}>
      <Image {...image} className={styles['shop-card-image']} />
      <div onClick={onClickHandler}>
        <Text children={title} className={styles['shop-card-title']} variant={TextVariantEnum.S} />
      </div>
      <div className={styles['shop-card-bottom']}>
        <Text children={price} className={styles['shop-card-price']} />
        <button className={styles['shop-card-button']}>
          <span>{buy}</span>
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
