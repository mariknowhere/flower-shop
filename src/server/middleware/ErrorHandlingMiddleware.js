const ApiError = require('../error/ApiError')

module.exports = function (error, request, response) {
  if (error instanceof ApiError) {
    return response.status(error.status).json({ message: error.message })
  }

  return response.status(500).json({ message: 'Неожиданная ошибка!' })
}
