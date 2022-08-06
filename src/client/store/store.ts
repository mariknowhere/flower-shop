import {
  ABOUT_ROUTE,
  DELIVERY_ROUTE,
  NEWS_ROUTE,
  PAYMENT_ROUTE,
} from "../constants/routes";

export const store = {
  headerData: {
    image: {
      url: 'icons/header/logo.jpg',
    },
    search: {
      action: 'search',
      image: {
        url: 'icons/header/search.png',
      },
      name: 'search',
      placeholder: 'Поиск',
      description: 'тюльпаны и пионы',
    },
    basket: {
      href: '',
      image: {
        url: 'icons/header/basket.png',
        height: 40,
      },
      id: 1,
    },
    signInImage: {
      url: 'icons/header/user.png',
      height: 40,
    },
  },
  navbarData: {
    items: [
      {
        href: DELIVERY_ROUTE,
        text: 'Доставка',
        id: 1,
      },
      {
        href: PAYMENT_ROUTE,
        text: 'Оплата',
        id: 2,
      },
      {
        href: NEWS_ROUTE,
        text: 'Новости',
        id: 3,
      },
      {
        href: ABOUT_ROUTE,
        text: 'Наши магазины',
        id: 4,
      },
    ],
    number: {
      href: 'tel:+375295629358',
      images: [
        {
          url: 'icons/navbar/mts.svg',
          height: 20,
        },
        {
          url: 'icons/navbar/viber.svg',
          height: 20,
        },
      ],
      text: '+375 (29) 562-93-58',
      id: 1,
    },
  },
};
