import React, {FC} from 'react';
import {IShopCardProps} from "./ShopCardTypes";
import styles from './ShopCard.module.scss';
import Image from "../../../components/image/Image";
import Text from "../../../components/text/Text";
import {BUY_BUTTON_TEXT} from "../../../constants/shop";
import {TextVariantEnum} from "../../../components/text/TextTypes";
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE, REACT_APP_API_URL} from "../../../constants/routes";
import SecondaryButton from "../../../components/button/secondaryButton/SecondaryButton";
import {SecondaryButtonEnum} from "../../../components/button/secondaryButton/SecondaryButtonTypes";


const ShopCard: FC<IShopCardProps> = ({ name, image, priceInRubles, priceInCents, id }) => {
  const navigate = useNavigate();
  const onClickHandler = () => navigate(`${DEVICE_ROUTE}/${id}`)

  return (
    <div className={styles['shop-card']}>
      <Image url={REACT_APP_API_URL + image} className={styles['shop-card-image']} onClick={onClickHandler} />
      <div onClick={onClickHandler}>
        <Text children={name} className={styles['shop-card-title']} variant={TextVariantEnum.S} />
      </div>
      <div className={styles['shop-card-bottom']}>
        <Text children={`${priceInRubles} руб. ${priceInCents} коп.`} className={styles['shop-card-price']} />
        <SecondaryButton buttonText={BUY_BUTTON_TEXT} className={styles['shop-card-button']} type={SecondaryButtonEnum.Secondary} />
      </div>
    </div>
  );
};

export default ShopCard;
