import React, {FC} from 'react';
import {IShopCardProps} from "./ShopCardTypes";
import styles from './ShopCard.module.scss';
import Image from "../../../components/image/Image";
import Text from "../../../components/text/Text";
import {TextVariantEnum} from "../../../components/text/TextTypes";
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE, REACT_APP_API_URL} from "../../../constants/routes";
import SecondaryButton from "../../../components/button/secondaryButton/SecondaryButton";
import {SecondaryButtonEnum} from "../../../components/button/secondaryButton/SecondaryButtonTypes";
import {observer} from "mobx-react-lite";
import {useShop} from "../../../hooks/useShop";


const ShopCard: FC<IShopCardProps> = observer(({ name, img, priceInRubles, priceInCents, id }) => {
  const navigate = useNavigate();

  const onClickHandler = () => navigate(`${DEVICE_ROUTE}/${id}`);

  const buttonText = useShop();

  return (
    <div className={styles['shop-card']}>
      <div className={styles['shop-card-image-wrapper']}>
        <Image url={REACT_APP_API_URL + img} className={styles['shop-card-image']} onClick={onClickHandler} />
      </div>
      <div onClick={onClickHandler}>
        <Text children={name} className={styles['shop-card-title']} variant={TextVariantEnum.S} />
      </div>
      <div className={styles['shop-card-bottom']}>
        <Text children={`${priceInRubles} руб. ${priceInCents} коп.`} className={styles['shop-card-price']} />
        <SecondaryButton buttonText={buttonText} className={styles['shop-card-button']} type={SecondaryButtonEnum.Secondary} />
      </div>
    </div>
  );
});

export default ShopCard;
