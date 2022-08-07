const jsonwebtoken = require('jsonwebtoken')

module.exports = function (request, response, next) {
  if (request.method === 'OPTIONS') {
    next()
  }

  try {
    const token = request.headers.authorization.split(' ')[1]
    if (!token) {
      return response.status(401).json({ message: 'Не авторизован' })
    }

    request.user = jsonwebtoken.verify(token, process.env.SECRET_KEY)

    next()
  } catch (e) {
      response.status(401).json({ message: 'Не авторизован' })
  }
}
