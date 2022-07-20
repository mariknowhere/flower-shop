import React, {FC} from 'react';
import styles from "./DeliveryTable.module.scss";
import {IDeliveryTableProps} from "./DeliveryTableTypes";

const DeliveryTable: FC<IDeliveryTableProps> = ({ head, body }) => {
  return (
    <table className={styles.table}>
      <thead>
      <tr>
        {head.items.map(({ category }) => <th className={styles['table-th']}>{category}</th>)}
      </tr>
      </thead>
      <tbody>
      <tr className={styles['table-tr']}>
        <td colSpan={3} className={styles['table-td']}>
          {body.deliveryInCity}<b>{body.deliveryInCityLate}</b>
        </td>
      </tr>
      <tr>
        {body.inCityFirstValues.map(({ categoryValue }) => (
          <td className={styles['table-td']}>{categoryValue}</td>
          ))}
        <td className={styles['table-td']}><b>{body.price}</b></td>
      </tr>
      <tr className={styles['table-tr']}>
        {body.inCitySecondValues.map(({ categoryValue }) => (
          <td className={styles['table-td']}>{categoryValue}</td>
        ))}
      </tr>
      <tr>
        <td colSpan={3} className={styles['table-td']}>
          {body.deliveryInRegion}<b>{body.deliveryInRegionLate}</b>
        </td>
      </tr>
      </tbody>
    </table>
  );
};

export default DeliveryTable;
