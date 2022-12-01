import React, {FC} from 'react';
import styles from "./DeviceCompound.module.scss";
import Text from "../../../components/text/Text";
import {COMPOUND_TEXT} from "../../../constants/createDevice";
import {TextVariantEnum} from "../../../components/text/TextTypes";
import {IDevicePageProps} from "../DevicePageTypes";

export type DeviceCompoundType = Pick<IDevicePageProps, 'compound'>;

const DeviceCompound: FC<DeviceCompoundType> = ({ compound }) => {
  return (
    <div className={styles['device-characteristics-wrapper']}>
      <Text children={COMPOUND_TEXT} className={styles['device-characteristics-title']} />
      <div className={styles['device-characteristics']}>
        {compound.map(({ name, count }) => (
          <div key={name} className={styles['device-characteristic']}>
            <Text children={name} variant={TextVariantEnum.M} className={styles['device-characteristic-value']} />
            <Text children={count} variant={TextVariantEnum.XS} className={styles['device-characteristic-count']} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceCompound;
