const { getAllHotels, getHotelDetails } = require('../functions/hotelfuction')
const Router = require('express').Router()

Router.get('/', getAllHotels)
Router.get('/getdetails/:id', getHotelDetails)

module.exports = Router