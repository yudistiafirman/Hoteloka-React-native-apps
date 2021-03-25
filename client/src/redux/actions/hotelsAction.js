import { HIDE_DATE_PICKER, HOTEL_ERROR, HOTEL_LOADED, HOTEL_LOADING, PRICE_ASC, SET_DATE, SET_END_DATE, SHOW_DATE_PICKER } from "../typeRed"
import Axios from 'axios'
import { hotelAuth } from "../../constants/Api"

export const getAllhotel = (date, end) => {

    return (dispatch) => {
        dispatch({
            type: HOTEL_LOADING
        })

        Axios.get(`${hotelAuth}?date=${date}&end=${end}`).then((res) => {

            if (res.data.error) {
                dispatch({
                    type: HOTEL_ERROR,
                    payload: res.data.message
                })
            } else {
                dispatch({
                    type: HOTEL_LOADED,
                    payload: res.data.data
                })
            }
        })
            .catch((err) => {
                dispatch({
                    type: HOTEL_ERROR,
                    payload: err.message
                })
            })

    }


}

export const sortHotelbyPrice = () => {
    return {
        type: PRICE_ASC
    }
}




export const setDate = (range) => {

    return {
        type: SET_DATE,
        payload: range
    }




}





