export default class DeliveryStore {
  constructor() {
    this.navigator = {
      title: 'Доставка цветов',
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
    this.title = 'Стоимость и условия доставки'
    this.table = {
      head: {
        items: [
          {
            category: '№',
          },
          {
            category: 'Доставка',
          },
          {
            category: 'Стоимость доставки',
          },
        ],
      },
      body: {
        deliveryInCity: 'Доставка курьером ',
        deliveryInCityLate: 'по Полоцку и Новополоцку',
        inCityFirstValues: [
          {
            categoryValue: '1',
          },
          {
            categoryValue: 'На сумму выше 80 рублей'
          },
        ],
        price: 'Бесплатно',
        inCitySecondValues: [
          {
            categoryValue: '2',
          },
          {
            categoryValue: 'На сумму ниже 80 рублей',
          },
          {
            categoryValue: 'По тарифам «Яндекс Такси»',
          },
        ],
        inCitySecond: {
          number: '2',
          delivery: 'На сумму ниже 80 рублей',
          price: '10 рублей',
        },
        deliveryInRegion: 'Доставка в регионы ',
        deliveryInRegionLate: 'обсуждается индивидуально',
      }
    }
    this.description = `
 Доставка цветов осуществляется через «Яндекс Такси» в наше рабочее время. 
 При заказе, укажите адрес, дату и желаемый интервал времени для доставки. 
 Таксист привезет заказ вовремя, цветы будут свежими, а получатель будет очень счастлив!`
  }
}
