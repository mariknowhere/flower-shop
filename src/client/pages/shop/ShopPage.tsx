import React, {useContext} from 'react';
import styles from './ShopPage.module.scss';
import {Context} from "../../../index";
import ShopCard from "./shopCard/ShopCard";
import {observer} from "mobx-react-lite";
import Container from "../../components/container/Container";

const ShopPage = observer(() => {
  const { device } = useContext(Context);
  const { devices } = device;

  return (
    <Container>
      <div className={styles['shop-cards']}>
        {devices.map(device => <ShopCard {...device} key={device.id} />)}
      </div>
    </Container>
  );
});

export default ShopPage;
