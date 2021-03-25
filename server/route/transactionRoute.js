const Router = require('express').Router()
const decodeToken= require('../middleware/jwtMidd')
const { createTransaction, paymentApproved, getAllTransactions, getTransactionsByid } = require('../functions/transaction')

Router.post('/', createTransaction)
Router.post('/approved',decodeToken,paymentApproved)
Router.get('/getalltransactions',getAllTransactions)
Router.get('/gettransactionsbyid/:id',getTransactionsByid)
module.exports = Router