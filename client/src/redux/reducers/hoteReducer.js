const { HOTEL_LOADED, HOTEL_LOADING, HOTEL_ERROR, PRICE_ASC, SET_DATE, } = require("../typeRed")

const data = {
    loading: false,
    data: null,
    error: null,
    filterDate: new Date(),
    filterDateEnd: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1),

}



export const hotelsReducer = (state = data, action) => {
    switch (action.type) {
        case HOTEL_LOADING:
            return { ...state, loading: true, data: null }
        case HOTEL_LOADED:
            return { ...state, loading: false, data: action.payload }
        case HOTEL_ERROR:
            return { ...state, loading: false, error: action.payload }
        case PRICE_ASC:
            let hotelSorted = [...state.data]
            hotelSorted.sort((a, b) => {
                return a.price - b.price
            })
            return { ...state, data: hotelSorted }
        case SET_DATE:

            return { ...state, filterDate: action.payload.startDate, filterDateEnd: action.payload.endDate }


        default:
            return state
    }

}
