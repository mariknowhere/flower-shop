import React, {FC} from 'react';
import classNames from "classnames";
import styles from "./Modal.module.scss";
import {IModalProps} from "./ModalTypes";
import Title from "../../title/Title";
import {TitleVariantEnum} from "../../title/TitleTypes";
import Image from "../../image/Image";

const Modal: FC<IModalProps> = ({
  isModalVisible,
  setModalVisible,
  children,
  className,
  title,
  image
}) => {
  const onPhoneClick = () => setModalVisible(!isModalVisible);

  const onContentClick = (event: { stopPropagation: () => any; }) => event.stopPropagation();
  const onCloseIconClick = () => setModalVisible(!isModalVisible);

  return (
    <div
      className={classNames(className, styles.modal, { [styles['modal-active']]: isModalVisible })}
      onClick={onPhoneClick}
    >
      <div className={classNames(styles['modal-content'], { [styles['modal-content-active']]: isModalVisible })} onClick={onContentClick}>
        <div className={styles['modal-header']}>
          <Title children={title} variant={TitleVariantEnum.H2} className={styles['modal-header-title']} />
          <Image {...image} onClick={onCloseIconClick} className={styles['modal-header-image']} />
        </div>
        <hr className={styles['modal-divider']} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
