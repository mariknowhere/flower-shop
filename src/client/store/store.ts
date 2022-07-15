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
        image: {
          url: 'icons/header/viber.png',
          height: 26,
        },
        text: '+375 (29) 562-93-58',
        id: 1,
      }
    ]
  },
  menuData: {
    items: [
      {
        href: '',
        text: 'Каталог',
        id: 1,
      },
      {
        href: '',
        text: 'Доставка',
        id: 2,
      },
      {
        href: '',
        text: 'Оплата',
        id: 3,
      },
      {
        href: '',
        text: 'Новости',
        id: 4,
      },
      {
        href: '',
        text: 'Наши магазины',
        id: 5,
      },
    ],
    social: {
      href: '',
      image: {
        url: 'icons/menu/basket.png',
        height: 30,
      },
      id: 1,
    }
  }
}