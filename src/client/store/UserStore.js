import {makeAutoObservable} from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    this._hamburgerMenu = {
      header: {
        closeImage: {
          url: 'icons/about/close.png',
          height: 45,
        },
        title: 'Авторизация',
        phoneImage: {
          url: 'icons/auth/auth.png',
          height: 40,
        },
      },
      auth: {
        login: {
          name: 'user_login',
          type: 'text',
          placeholder: 'Логин',
          image: {
            url: 'icons/auth/user.png',
            height: 25,
          },
        },
        password: {
          name: 'user_password',
          type: 'password',
          placeholder: 'Пароль',
          image: {
            url: 'icons/auth/password.png',
            height: 25,
          },
        },
        checkbox: 'Запомнить меня на этом устройстве',
        buttonText: 'Войти',
        secondaryButtonText: 'Регистрация',
      },
    }
    makeAutoObservable(this)
  }

  setAuth(bool) {
    this._isAuth = bool
  }

  setUser(user) {
    this._user = user
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }

  get hamburgerMenu() {
    return this._hamburgerMenu
  }
}