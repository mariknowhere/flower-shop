import React, {FC, useContext} from 'react';
import styles from "./ShopTypes.module.scss";
import Container from "../../../components/container/Container";
import {DirectionVariantEnum} from "../../../components/container/ContainerTypes";
import ShopType from "../shopType/ShopType";
import classNames from "classnames";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";

const ShopTypes: FC = observer(() => {
  const { device } = useContext(Context);
  const { types, selectedType } = device;

  return (
    <div className={styles['shop-types']}>
      <Container className={styles['shop-types-container']} direction={DirectionVariantEnum.Row}>
        {types.map(type => (
          <ShopType
            {...type}
            onClick={() => device.setSelectedType(type)}
            className={classNames({ [styles['shop-type-active']]: type.id === selectedType.id })}
            classNameText={classNames({ [styles['shop-text-active']]: type.id === selectedType.id })}
            key={type.id}
          />
        ))}
      </Container>
    </div>
  );
});

export default ShopTypes;
