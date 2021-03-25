import { AUTH_SUCCESS, CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD, CHANGE_PHONE, ERROR, FORGOT, LOADING, LOGOUT, CHANGE_IMAGE } from "../typeRed"

const data = {
    token: '',
    error: '',
    loading: false,
    fullname: '',
    phone: '',
    email: '',
    password: '',
    image:'',


}


const userReducer = (state = data, action) => {
    switch (action.type) {
        case ERROR:
            return { ...state, error: action.payload, token: "", loading: false }
        case AUTH_SUCCESS:
            return { ...state, token: action.payload.token, loading: false, fullname: action.payload.fullname, email: action.payload.email,phone:action.payload.phone,image:action.payload.image }
        case LOADING:
            return { ...state, error: "", token: "", loading: true }
        case LOGOUT:
            return { ...state, error: "", email: '', password: '', fullname: '', phone: '', token: action.payload, loading: false }
        case FORGOT:
            return { ...state, error: "", token: "", loading: false, data: action.payload }
        case CHANGE_NAME:
            return { ...state, error: '', token: '', loading: false, fullname: action.payload }
        case CHANGE_EMAIL:
            return { ...state, error: '', token: '', loading: false, email: action.payload }
        case CHANGE_PHONE:
            return { ...state, error: "", token: "", loading: false, phone: action.payload }
        case CHANGE_PASSWORD:
            return { ...state, token: "", loading: false, password: action.payload }
      
        default:
            return state
    }
}

export default userReducer