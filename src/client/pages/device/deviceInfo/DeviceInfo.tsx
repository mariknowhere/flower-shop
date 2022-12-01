import React, {FC} from 'react';
import styles from "./DeviceInfo.module.scss";
import Image from "../../../components/image/Image";
import Text from "../../../components/text/Text";
import {TextVariantEnum} from "../../../components/text/TextTypes";
import {DEVICE_INFO_ITEMS} from "../../../constants/device";

const DeviceInfo: FC = () => {
  return (
    <div className={styles['device-item-wrapper']}>
      {DEVICE_INFO_ITEMS.map(({image, category, value}) => (
        <div key={category} className={styles['device-item']}>
          <Image {...image} className={styles['device-item-image']} />
          <Text children={category} variant={TextVariantEnum.S} className={styles['device-item-category']} />
          <Text children={value} variant={TextVariantEnum.S} className={styles['device-item-value']} />
        </div>
      ))}
    </div>
  );
};

export default DeviceInfo;
