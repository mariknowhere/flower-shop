import React, {FC, useContext, useEffect} from 'react';
import styles from "./ShopTypes.module.scss";
import Container from "../../../components/container/Container";
import {DirectionVariantEnum} from "../../../components/container/ContainerTypes";
import ShopType from "../shopType/ShopType";
import classNames from "classnames";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";
import {fetchTypes} from "../../../http/deviceAPI";

const ShopTypes: FC = observer(() => {
  const { device } = useContext(Context);
  const { types, selectedType } = device;

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
  }, []);

  return (
    <nav className={styles['shop-types']}>
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
    </nav>
  );
});

export default ShopTypes;
