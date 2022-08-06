import React, {FC} from 'react';
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

const NavBar: FC<INavBarProps> = observer(({ items, number }) => {
  return (
    <div className={styles.navbar}>
      <Container className={styles['navbar-container']} direction={DirectionVariantEnum.Row}>
        <ul className={styles['navbar-list']}>
          {items.map(({ href, text, id }) => (
            <NavBarItem href={href} text={text} key={id} />
          ))}
        </ul>
        <Social
          {...number}
          className={styles['navbar-social']}
          classNameImage={styles['navbar-social-image']}
        />
        <Text children={SCHEDULE_TEXT} className={styles['navbar-description']} variant={TextVariantEnum.S} />
      </Container>
    </div>
  );
});

export default NavBar;
