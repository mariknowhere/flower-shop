export default class AboutStore {
  constructor() {
    this.title = 'Наши магазины'
    this.cards = [
      {
        id: 1,
        title: 'Салон «Цветочная Кухня»',
        address: 'г. Полоцк, просп. Франциска Скорины, 37',
        image: {
          url: 'icons/about/shop.jpg',
          height: 240,
        },
        icon: {
          url: 'icons/about/geo.png',
          height: 21,
        },
        hours: '10:00 - 19:00',
        description: 'ТЦ "Стрелец"',
        review: {
          href: 'https://www.instagram.com/stories/highlights/17922300922743998/',
          text: 'Отзывы',
        },
        reviewCount: '10',
        social: {
          url: 'icons/about/phone.png',
          height: 30,
        },
      }
    ]
  }
}