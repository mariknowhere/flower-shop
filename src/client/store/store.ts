import {
  ABOUT_ROUTE,
  DELIVERY_ROUTE,
  NEWS_ROUTE,
  PAYMENT_ROUTE,
  SHOP_ROUTE
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
      description: 'Например: тюльпаны и пионы',
    },
    socials: [
      {
        href: 'https://www.instagram.com/cvetochnaya_kuhniya/',
        image: {
          url: 'icons/header/instagram.png',
          height: 55,
        },
        id: 1,
      },
    ],
    socialNumbers: [
      {
        href: 'tel:+375295629358',
        images: [
          {
            url: 'icons/header/viber.png',
            height: 26,
          },
          {
            url: 'icons/header/telegram.png',
            height: 26,
          },
          {
            url: 'icons/header/whatsapp.png',
            height: 26,
          },
        ],
        text: '+375 (29) 562-93-58',
        id: 1,
      }
    ]
  },
  menuData: {
    items: [
      {
        href: SHOP_ROUTE,
        text: 'Каталог',
        id: 1,
      },
      {
        href: DELIVERY_ROUTE,
        text: 'Доставка',
        id: 2,
      },
      {
        href: PAYMENT_ROUTE,
        text: 'Оплата',
        id: 3,
      },
      {
        href: NEWS_ROUTE,
        text: 'Новости',
        id: 4,
      },
      {
        href: ABOUT_ROUTE,
        text: 'Наши магазины',
        id: 5,
      },
    ],
    social: {
      href: '',
      image: {
        url: 'icons/menu/basket.png',
        height: 40,
      },
      id: 1,
    },
  }
}
