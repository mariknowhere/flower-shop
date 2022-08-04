export default class NewsStore {
  constructor() {
    this._navigator = {
      title: 'Список новостей',
      socialBackText: {
        text: 'Главная',
        href: '/'
      },
      socialBackImage: {
        image: {
          url: 'icons/less.png',
          height: 40,
        },
        href: '/',
      },
    }
    this._items = [
      {
        id: 1,
        title: 'Скидки 30% в честь 1 августа!',
        mainImage: {
          url: 'icons/discounts.jpg',
        },
        date: {
          image: {
            url: 'icons/date.png',
            height: 25,
          },
          text: '20 Июля',
        },
        description: 'В честь 1 августа, а именно в честь годовщины магазина. Мы дарим всем скидку на первую покупку в ' +
          'месяце по промокоду "Годовщина". При заказе оставляйте в комментарии к заказу промокод и она подействует. Удачных покупок! ',
        review: {
          href: '/',
          text: 'Каталог',
        },
      },
      {
        id: 2,
        title: '19 Мая работаем до 16:00!',
        mainImage: {
          url: 'icons/warning.jpg',
        },
        date: {
          image: {
            url: 'icons/date.png',
            height: 25,
          },
          text: '19 Июля',
        },
        description: 'По техническим причинам, 19 Июля мы работаем до 16:00. Имейте это ввиду когда будете оформлять заказ. Удачных покупок!',
        review: {
          href: '/',
          text: 'Каталог',
        },
      },
    ]
  }

  get navigator() {
    return this._navigator
  }

  get items() {
    return this._items
  }
}
