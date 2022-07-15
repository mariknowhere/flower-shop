import React, { FC } from 'react';
import {ISearchProps} from "./SearchTypes";
import Image from "../image/Image";
import styles from './Search.module.scss';

const Search: FC<ISearchProps> = ({ action, image, name, placeholder, description  }) => {
  return (
    <div className={styles['search']}>
      <form action={action}>
        <Image {...image} className={styles['search-image']} />
        <label className={styles['search-label']}>
          <input type="text" name={name} placeholder={placeholder} className={styles['search-input']} />
        </label>
        <span className={styles['search-description']}>{description}</span>
      </form>
    </div>
  );
};

export default Search;