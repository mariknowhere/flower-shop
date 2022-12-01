import React, {FC, useContext, useEffect, useState} from 'react';
import Title from "../../components/title/Title";
import Image from "../../components/image/Image";
import Text from "../../components/text/Text";
import styles from "./DevicePage.module.scss";
import {useParams} from "react-router-dom";
import {REACT_APP_API_URL} from "../../constants/routes";
import Navigator from "../../components/navigator/Navigator";
import {Context} from "../../../index";
import {TitleVariantEnum} from "../../components/title/TitleTypes";
import {TextVariantEnum} from "../../components/text/TextTypes";
import SecondaryButton from "../../components/button/secondaryButton/SecondaryButton";
import Container from "../../components/container/Container";
import {FREE_DELIVERY_TEXT} from "../../constants/device";
import {fetchOneDevice} from "../../http/deviceAPI";
import {IDevicePageProps} from "./DevicePageTypes";
import DevicePayments from "./devicePayments/DevicePayments";
import DeviceInfo from "./deviceInfo/DeviceInfo";
import DeviceCompound from "./deviceCompound/DeviceCompound";
import {useShop} from "../../hooks/useShop";

const DevicePage: FC = () => {
  const [product, setItem] = useState<IDevicePageProps>({ compound: [{ name: '', count: '' }], name: '', id: 0, img: '', priceInCents: '', priceInRubles: '' });
  const { id } = useParams();
  const buttonText = useShop();
  const { device } = useContext(Context);

  const { navigator } = device;

  useEffect(() => {
    fetchOneDevice(id).then(data => {
      setItem(data)
    })
  }, []);

  const isDeliveryFree = Number(product.priceInRubles) > 80;

  return (
    <div className={styles.device}>
      <Navigator {...navigator} />
      <Container>
        <Title children={product.name} variant={TitleVariantEnum.H1} className={styles['device-title']} />
        <div className={styles['device-content']}>
          <div className={styles['device-image-wrapper']}>
            <Image url={REACT_APP_API_URL + product.img} className={styles['device-image']} />
          </div>
          <div className={styles['device-info']}>
            <div>
              <Title children={`${product.priceInRubles} руб. ${product.priceInCents} коп.`} variant={TitleVariantEnum.H2} className={styles['device-price']} />
              {isDeliveryFree && (
                <div className={styles['device-delivery-wrapper']}>
                  <Image url={'../icons/device/delivery.svg'} className={styles['device-car']}/>
                  <Text children={FREE_DELIVERY_TEXT} variant={TextVariantEnum.S} className={styles['device-delivery']}/>
              </div>
              )}
              <SecondaryButton buttonText={buttonText} className={styles['device-button']} />
              <DeviceInfo />
              <DevicePayments />
              <DeviceCompound compound={product.compound} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DevicePage;
