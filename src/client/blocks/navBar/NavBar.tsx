import React, {FC, useContext} from 'react';
import {INavBarProps} from "./NavBarTypes";
import styles from './NavBar.module.scss';
import Social from "../../components/social/Social";
import {observer} from "mobx-react-lite";
import NavBarItem from "./navBarItem/NavBarItem";
import Text from "../../components/text/Text";
import {TextVariantEnum} from "../../components/text/TextTypes";
import {SCHEDULE_TEXT} from "../../constants/navbar";
import Container from "../../components/container/Container";
import {DirectionVariantEnum} from "../../components/container/ContainerTypes";
import {Context} from "../../../index";
import classNames from "classnames";

const NavBar: FC<INavBarProps> = observer(({ items, number }) => {
  const { navbar } = useContext(Context);

  return (
    <nav className={styles.navbar}>
      <Container className={styles['navbar-container']} direction={DirectionVariantEnum.Row}>
        <ul className={styles['navbar-list']}>
          {items.map((item) => (
            <NavBarItem
              href={item.href}
              text={item.text}
              key={item.id}
              className={classNames({ [styles['navbar-item-active']]: item.id === navbar.selectedItem.id })}
              onClick={() => navbar.setSelectedItem(item)}
            />
          ))}
        </ul>
        <Social
          {...number}
          className={styles['navbar-social']}
          classNameImage={styles['navbar-social-image']}
        />
        <Text children={SCHEDULE_TEXT} className={styles['navbar-description']} variant={TextVariantEnum.S} />
      </Container>
    </nav>
  );
});

export default NavBar;
