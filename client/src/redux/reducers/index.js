import counterReducer from "./counterReducer"
import userReducer from './userReducer'
import { combineReducers } from 'redux'
import { hotelsReducer } from "./hoteReducer"
import { hotelDetailReducer } from "./hDetailsReducers"
import { transactionReducer } from "./transaction"
import credentialReducer from "./userCredential"
import { editReducer } from "./editReducer"



const rootReducer = combineReducers(
    {
        user: userReducer,
        counter: counterReducer,
        hotels: hotelsReducer,
        details: hotelDetailReducer,
        transactions:transactionReducer,
        credential:credentialReducer,
        edit:editReducer
  
    }

)


export default rootReducer
