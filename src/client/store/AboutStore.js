export default class AboutStore {
  constructor() {
    this.navigator = {
      title: 'Магазины',
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
    this.title = 'Магазины «Цветочная Кухня» в Полоцке'
    this.shops = [
      {
        id: 1,
        title: {
          text: 'Салон «Цветочная Кухня»',
          href: 'https://www.instagram.com/cvetochnaya_kuhniya/'
        },
        geo: {
          text: 'г. Полоцк, просп. Франциска Скорины, 37',
          image: {
            url: 'icons/about/geo.png',
            height: 21,
          },
        },
        image: {
          url: 'icons/about/shop.jpg',
          height: 250,
        },
        hours: '10:00 - 19:00',
        shoppingCenter: {
          text: 'ТЦ "Стрелец"',
          href: 'https://www.google.com/maps/place/%D0%A1%D1%82%D1%80%D0%B5%D0%BB%D0%B5%D1%86,+%D0%9F%D0%BE%D0%BB%D0%BE%D1%86%D0%BA/@55.4840061,28.7856092,17z/data=!3m1!4b1!4m5!3m4!1s0x46c48e02f0dd2b77:0x9b7854471ce0f712!8m2!3d55.4839794!4d28.788089',
        },
        review: {
          social: {
            href: 'https://www.instagram.com/stories/highlights/17922300922743998/',
            text: 'Отзывы',
          },
          count: '10',
        },
        social: {
          url: 'icons/about/phone.png',
          height: 30,
        },
      }
    ]
    this.hamburgerMenu = {
      header: {
        closeImage: {
          url: 'icons/about/close.png',
          height: 45,
        },
        title: 'Салон «Цветочная Кухня»',
        phoneImage: {
          url: 'icons/about/phone.png',
          height: 35,
        },
      },
      body: {
        geo: {
          geoImage: {
            url: 'icons/about/geo.png',
            height: 30,
          },
          geoText: 'г. Полоцк, просп. Франциска Скорины, 37',
          geoHref: 'https://www.google.com/maps/place/%D0%A1%D1%82%D1%80%D0%B5%D0%BB%D0%B5%D1%86,+%D0%9F%D0%BE%D0%BB%D0%BE%D1%86%D0%BA/@55.4840061,28.7856092,17z/data=!3m1!4b1!4m5!3m4!1s0x46c48e02f0dd2b77:0x9b7854471ce0f712!8m2!3d55.4839794!4d28.788089',
        },
        schedule: {
          scheduleImage: {
            url: 'icons/about/hours.png',
            height: 30,
          },
          dayText: 'Сегодня',
          hoursText: '10:00 - 19:00',
        },
        mobile: {
          mobilePhoneImage: {
            url: 'icons/about/mobile.png',
            height: 30,
          },
          mobilePhoneText: '+375 (29) 562-93-58',
          mobilePhoneHref: 'tel:+375295629358',
        },
        email: {
          emailImage: {
            url: 'icons/about/email.png',
            height: 30,
          },
          emailText: 'zdankomaria@gmail.com',
          emailHref: 'mailto:zdankomaria@gmail.com',
        },
      },
    }
  }
}
