import React, {useContext} from 'react';
import Title from "../../components/title/Title";
import Image from "../../components/image/Image";
import Text from "../../components/text/Text";
import styles from "./DevicePage.module.scss";
import {buy} from "../../constants/shop";
import {Link} from "react-router-dom";
import {PAYMENT_ROUTE} from "../../constants/routes";
import Navigator from "../../components/navigator/Navigator";
import {Context} from "../../../index";
import {TitleVariantEnum} from "../../components/title/TitleTypes";
import {TextVariantEnum} from "../../components/text/TextTypes";
import SecondaryButton from "../../components/button/secondaryButton/SecondaryButton";

const radix = 10;

const DevicePage = () => {
  const items = [
    {
      image: {
        url: '../icons/device/time.png',
        height: 20,
      },
      category: 'Можем доставить: ',
      value: '1-2 часа'
    },
    {
      image: {
        url: '../icons/device/pickup.png',
        height: 20,
      },
      category: 'Самовывоз: ',
      value: 'г.Полоцк, просп. Франциска Скорины, 37'
    },
  ];

  const characteristics = [
    {
      value: 'Роза одноголовая Пинк Мондиал',
      count: 5,
    },
    {
      value: 'Хризантема',
      count: 5,
    },
    {
      value: 'Кустовая роза Роял Порцелина ',
      count: 5,
    },
    {
      value: 'Писташ',
      count: 5,
    },
  ];
  const { device } = useContext(Context);
  const { navigator } = device;

  return (
    <div className={styles.device}>
      <Navigator {...navigator} />
      <div className={styles['device-container']}>
        <Title children={'Букет Барселона из хризантемы, роз и диантуса'} variant={TitleVariantEnum.H1} className={styles['device-title']} />
        <div className={styles['device-content']}>
          <div>
            <Image url={'https://zakazcvetov.by/files/compressed/files_cat_4329_1619217903_big.jpg'} className={styles['device-image']} />
          </div>
          <div className={styles['device-info']}>
            <div>
              <Title children={'190 руб. 0 коп.'} variant={TitleVariantEnum.H2} className={styles['device-price']} />
              <div className={styles['device-delivery-wrapper']}>
                <Image url={'https://zakazcvetov.by/static/front/img/view/delivery.svg'} className={styles['device-car']} />
                <Text children={'Бесплатная доставка'} variant={TextVariantEnum.S} className={styles['device-delivery']} />
              </div>
              <SecondaryButton buttonText={buy} className={styles['device-button']} />
              <div className={styles['device-item-wrapper']}>
                {items.map(({image, category, value}) => (
                  <div key={category} className={styles['device-item']}>
                    <Image {...image} className={styles['device-item-image']} />
                    <Text children={category} variant={TextVariantEnum.S} className={styles['device-item-category']} />
                    <Text children={value} variant={TextVariantEnum.S} className={styles['device-item-value']} />
                  </div>
                ))}
              </div>
              <div className={styles['device-payment-wrapper']}>
                <Text children={'Простая оплата:'} variant={TextVariantEnum.M} className={styles['device-payment']} />
                <Link to={PAYMENT_ROUTE} className={styles['device-payment-link']}>Все способы оплаты</Link>
              </div>
              <div className={styles['device-characteristics-wrapper']}>
                <Text children={'Состав:'} className={styles['device-characteristics-title']} />
                <div className={styles['device-characteristics']}>
                  {characteristics.map(({ value, count }) => (
                    <div key={value} className={styles['device-characteristic']}>
                      <Text children={value} variant={TextVariantEnum.M} className={styles['device-characteristic-value']} />
                      <Text children={count.toString(radix)} variant={TextVariantEnum.XS} className={styles['device-characteristic-count']} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicePage;