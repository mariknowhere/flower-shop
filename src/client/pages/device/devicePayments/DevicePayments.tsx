import React, {FC} from 'react';
import styles from "./DevicePayments.module.scss";
import Text from "../../../components/text/Text";
import {TextVariantEnum} from "../../../components/text/TextTypes";
import {Link} from "react-router-dom";
import {PAYMENT_ROUTE} from "../../../constants/routes";
import {DEVICE_PAYMENT_LINK_TEXT, DEVICE_PAYMENT_TEXT} from "../../../constants/device";

const DevicePayments: FC = () => {
  return (
    <div className={styles['device-payment-wrapper']}>
      <Text children={DEVICE_PAYMENT_TEXT} variant={TextVariantEnum.M} className={styles['device-payment']} />
      <Link to={PAYMENT_ROUTE} className={styles['device-payment-link']}>{DEVICE_PAYMENT_LINK_TEXT}</Link>
    </div>
  );
};

export default DevicePayments;
