import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'
import { userAuth } from '../../constants/Api'
import {  ERROR_CREDENTIAL, FETCH_CREDENTIAL, LOADING_CREDENTIAL } from '../typeRed'





export const getUserByid = () => {
    return  (dispatch) => {
        dispatch({
            type: LOADING_CREDENTIAL
        })
        try {
        AsyncStorage.getItem('@token').then((res)=>{
     
         
            Axios.get(userAuth+'/getuserbyid/'+res).then((respon)=>{

        
                dispatch({
                    type:FETCH_CREDENTIAL,
                    payload:respon.data.data
                })
          }).catch((err) => {
            dispatch({
                type: ERROR_CREDENTIAL,
                payload: err.message
            })
        })

        })
        
          

            

        } catch (error) {
            dispatch({
                type: ERROR_CREDENTIAL,
                payload: error.message
            })
        }

    }
}


