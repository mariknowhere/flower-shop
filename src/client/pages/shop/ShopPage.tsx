import React, {useContext, useEffect} from 'react';
import styles from './ShopPage.module.scss';
import {Context} from "../../../index";
import ShopCard from "./shopCard/ShopCard";
import {observer} from "mobx-react-lite";
import Container from "../../components/container/Container";
import {fetchDevices} from "../../http/deviceAPI";

const ShopPage = observer(() => {
  const { device } = useContext(Context);
  const { devices } = device;

  useEffect(() => {
    fetchDevices().then(data => device.setDevices(data.rows))
  }, [])

  return (
    <Container>
      <div className={styles['shop-cards']}>
        {devices.map(device => <ShopCard {...device} key={device.id} />)}
      </div>
    </Container>
  );
});

export default ShopPage;
