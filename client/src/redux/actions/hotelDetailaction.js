import Axios from 'axios'
import { hotelAuth } from '../../constants/Api'
import { DETAIL_ERROR, DETAIL_LOADED, DETAIL_LOADING } from '../typeRed'



export const getHoteldetails = (id, date, end) => {

    return (dispatch) => {
        dispatch({
            type: DETAIL_LOADING
        })

        Axios.get(hotelAuth + '/getdetails/' + id + '?date=' + date + '&end=' + end).then((res) => {

            if (res.data.error) {
                dispatch({
                    type: DETAIL_ERROR,
                    payload: res.data.message
                })
            } else {
                dispatch({
                    type: DETAIL_LOADED,
                    payload: res.data.hotel_details
                })
            }
        }).catch((err) => {
            dispatch({
                type: DETAIL_ERROR,
                payload: err.message
            })
        })

    }
}