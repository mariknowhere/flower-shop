const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
  async create(request, response, next) {
    try {
      let { name, priceInRubles, priceInCents, typeId, compound } = request.body
      const { img } = request.files
      let fileName = `${uuid.v4()}.jpg`
      await img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const device = await Device.create({ name, priceInRubles, priceInCents, typeId, img: fileName })

      if (compound) {
        compound = JSON.parse(compound)
        compound.forEach(i => {
          DeviceInfo.create({
            name: i.name,
            price: i.price,
            deviceId: device.id
          })
        })

      }

      return response.json(device)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }

  async getAll(request, response) {
    let { typeId, limit, page } = request.query

    page = page || 1
    limit = limit || 10
    let offset = page * limit - limit

    let devices;

    if (!typeId) {
      devices = await Device.findAndCountAll({ limit, offset })
    } else {
      devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
    }

    return response.json(devices)
  }

  async getOne(request, response) {
    const { id } = request.params
    const device = await Device.findOne(
      {
        where: { id },
        include: [{ model: DeviceInfo, as: 'info' }]
      }
    )

    return response.json(device)
  }
}

module.exports = new DeviceController()
