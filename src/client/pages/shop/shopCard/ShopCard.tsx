import React, {FC} from 'react';
import {IShopCardProps} from "./ShopCardTypes";
import styles from './ShopCard.module.scss';
import Image from "../../../components/image/Image";
import Text from "../../../components/text/Text";
import {buy} from "../../../constants/shop";
import {TextVariantEnum} from "../../../components/text/TextTypes";
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from "../../../constants/routes";
import SecondaryButton from "../../../components/button/secondaryButton/SecondaryButton";
import {SecondaryButtonEnum} from "../../../components/button/secondaryButton/SecondaryButtonTypes";


const ShopCard: FC<IShopCardProps> = ({ title, image, price, id }) => {
  const navigate = useNavigate();
  const onClickHandler = () => navigate(`${DEVICE_ROUTE}/${id}`)

  return (
    <div className={styles['shop-card']}>
      <Image {...image} className={styles['shop-card-image']} onClick={onClickHandler} />
      <div onClick={onClickHandler}>
        <Text children={title} className={styles['shop-card-title']} variant={TextVariantEnum.S} />
      </div>
      <div className={styles['shop-card-bottom']}>
        <Text children={price} className={styles['shop-card-price']} />
        <SecondaryButton buttonText={buy} className={styles['shop-card-button']} type={SecondaryButtonEnum.Secondary} />
      </div>
    </div>
  );
};

export default ShopCard;
