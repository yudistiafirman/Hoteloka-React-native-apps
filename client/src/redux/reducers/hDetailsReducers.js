import { DETAIL_ERROR, DETAIL_LOADED, DETAIL_LOADING } from "../typeRed"

const data = {
    error: null,
    loading: false,
    data: null,
}

export const hotelDetailReducer = (state = data, action) => {
    switch (action.type) {
        case DETAIL_LOADING:
            return { ...state, loading: true, data: null, error: null }
        case DETAIL_LOADED:
            return { ...state, loading: false, data: action.payload }
        case DETAIL_ERROR:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}