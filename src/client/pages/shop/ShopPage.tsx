import React, {useContext} from 'react';
import ShopType from "./shopTypes/ShopType";
import styles from './ShopPage.module.scss';
import {Context} from "../../../index";
import ShopCard from "./shopCard/ShopCard";
import classNames from "classnames";
import {observer} from "mobx-react-lite";

const ShopPage = observer(() => {
  const { device } = useContext(Context);
  const { types, devices, selectedType } = device;

  return (
    <div className={styles.shop}>
      <div className={styles['shop-types-wrapper']}>
        <div className={styles['shop-types']}>
          {types.map(type => (
            <ShopType
              {...type}
              onClick={() => device.setSelectedType(type)}
              className={classNames({ [styles['shop-type-active']]: type.id === selectedType.id })}
              classNameText={classNames({ [styles['shop-text-active']]: type.id === selectedType.id })}
              key={type.id}
            />
          ))}
        </div>
      </div>
      <div className={styles['shop-container']}>
        <div className={styles['shop-cards']}>
          {devices.map(device => <ShopCard {...device} key={device.id} />)}
        </div>
      </div>
    </div>
  );
});

export default ShopPage;
