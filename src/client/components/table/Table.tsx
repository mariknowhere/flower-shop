import React, {FC} from 'react';
import styles from "./Table.module.scss";
import {ITableProps} from "./TableTypes";
import classNames from "classnames";

const Table: FC<ITableProps> = ({
  head,
  body,
  className,
  classNameCategory,
  classNameRow,
  classNameCategoryValue,
}) => {
  return (
    <table className={classNames(className, styles.table)}>
      <thead>
        <tr>
          {head.items.map(({ category, id }) => (
            <th className={classNames(classNameCategory, styles['table-category'])} key={id}>{category}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className={classNameRow}>
          <td colSpan={3} className={styles['table-category-value']}>
            {body.title}
            {body.titleAddition && <b>{body.titleAddition}</b>}
          </td>
        </tr>
        <tr className={classNameRow}>
          {body.categoryValuesPrimary.map(({ categoryValue, id }) => (
            <td className={classNames(classNameCategoryValue, styles['table-category-value'])} key={id}>{categoryValue}</td>
            ))}
          {body.categoryValueAddition && (
            <td className={styles['table-category-value']}>
              <b>{body.categoryValueAddition}</b>
            </td>
          )}
        </tr>
        <tr className={classNameRow}>
          {body.categoryValuesSecondary?.map(({ categoryValue, id }) => (
            <td className={classNames(classNameCategoryValue, styles['table-category-value'])} key={id}>{categoryValue}</td>
          ))}
        </tr>
        <tr className={classNameRow}>
          <td colSpan={3} className={styles['table-category-value']}>
            {body.titleSecondary}
            {body.titleSecondaryAddition && <b>{body.titleSecondaryAddition}</b>}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
