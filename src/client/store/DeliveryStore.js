export default class DeliveryStore {
  constructor() {
    this._navigator = {
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
    this._title = 'Стоимость и условия доставки'
    this._table = {
      head: {
        items: [
          {
            category: '№',
            id: 1,
          },
          {
            category: 'Доставка',
            id: 2,
          },
          {
            category: 'Стоимость доставки',
            id: 3,
          },
        ],
      },
      body: {
        title: 'Доставка курьером ',
        titleAddition: 'по Полоцку и Новополоцку',
        categoryValuesPrimary: [
          {
            categoryValue: '1',
            id: 1,
          },
          {
            categoryValue: 'На сумму выше 80 рублей',
            id: 2,
          },
        ],
        categoryValueAddition: 'Бесплатно',
        categoryValuesSecondary: [
          {
            categoryValue: '2',
            id: 1,
          },
          {
            categoryValue: 'На сумму ниже 80 рублей',
            id: 2,
          },
          {
            categoryValue: 'По тарифам «Яндекс Такси»',
            id: 3,
          },
        ],
        titleSecondary: 'Доставка в регионы ',
        titleSecondaryAddition: 'обсуждается индивидуально',
      }
    }
    this._description = `
 Доставка цветов осуществляется через «Яндекс Такси» в наше рабочее время. 
 При заказе, укажите адрес, дату и желаемый интервал времени для доставки. 
 Таксист привезет заказ вовремя, цветы будут свежими, а получатель будет очень счастлив!`
  }

  get navigator() {
    return this._navigator
  }

  get title() {
    return this._title
  }

  get table() {
    return this._table
  }

  get description() {
    return this._description
  }
}
