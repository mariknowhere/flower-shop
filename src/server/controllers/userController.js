const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const { User, Basket } = require('../models/models')

const generateJwt = (id, email, role) => {
  return jsonwebtoken.sign(
    { id, email, role },
    process.env.SECRET_KEY,
    { expiresIn: '24h' }
  )
}

class UserController {
  async registration(request, response, next) {
    const { email, password, role } = request.body
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный e-mail или password'))
    }

    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким e-mail уже существует'))
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({ email, role, password: hashPassword })
    const basket = await Basket.create({ userId: user.id })
    const token = generateJwt(user.id, user.email, user.role )

    return response.json({ token })
  }

  async login(request, response, next) {
    const { email, password } = request.body

    const user = await User.findOne({ where: { email } })
    if (!user) {
      next(ApiError.internal('Пользователь не найден'))
    }

    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      next(ApiError.internal('Указан неверный пароль'))
    }

    const token = generateJwt(user.id, user.email, user.role)

    return response.json({ token })
  }

  async check(request, response, next) {
    const token = generateJwt(request.user.id, request.user.email, request.user.role)

    return response.json({ token })
  }
}

module.exports = new UserController()
