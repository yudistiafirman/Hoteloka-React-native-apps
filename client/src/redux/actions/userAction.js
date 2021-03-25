import Axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userAuth } from "../../constants/Api"
import { AUTH_SUCCESS, ERROR, FORGOT, LOADING, LOGOUT, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_NAME, CHANGE_PHONE, USER_DETAIL, CHANGE_IMAGE } from "../typeRed";
export const onUserRegister = (fullname, phone, email, password, conpass) => {
    return (dispatch) => {
        try {
            dispatch({
                type: "LOADING"
            })
            const filter = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
            if (!(fullname && phone && email && password && conpass)) throw new Error("all form must be filled")
            if (!(password === conpass)) throw new Error("password and confirm password should be matched")
            if (password.length < 8) throw new Error("password must at least 8 character")
            if (!(filter.test(email))) throw new Error("invalid email format")

            const data = { email, password, fullname, phone }
            Axios.post(userAuth + "register", data)
                .then((res) => {
                    if (res.data.error) {
                        dispatch(
                            {
                                type: ERROR,
                                payload: res.data.message
                            }
                        )
                    } else {
                        AsyncStorage.setItem('@token', res.data.token)
                            .then((respons) => {
                                dispatch({
                                    type: AUTH_SUCCESS,
                                    payload: res.data
                                })
                            })
                            .catch((err) => {
                                dispatch({
                                    type: ERROR,
                                    payload: err.message
                                })
                            })
                    }
                })
                .catch((err) => {
                    console.log(err)
                    dispatch({
                        type: ERROR,
                        payload: err.message
                    })
                })
        } catch (error) {

            dispatch({
                type: ERROR,
                payload: error.message
            })

        }
    }
}
export const onUserLogin = (email, password) => {
    return (dispatch) => {
        try {
            dispatch({
                type: LOADING
            })
            const filter = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
            if (!(email && password)) throw new Error("all form must be filled")
            if (password.length < 8) throw new Error("password must at least 8 character")
            if (!(filter.test(email))) throw new Error("invalid email format")


            const data = { email, password }

            Axios.post(userAuth + "login", data)
                .then((res) => {
                    console.log(res.data)
                    if (res.data.error) {
                        dispatch(
                            {
                                type: ERROR,
                                payload: res.data.message
                            }
                        )
                    } else {
                        AsyncStorage.setItem('@token', res.data.token)
                            .then((respons) => {
                                dispatch({
                                    type: AUTH_SUCCESS,
                                    payload: res.data
                                })
                            })

                            .catch((err) => {
                                dispatch({
                                    type: ERROR,
                                    payload: err.message
                                })
                            })
                    }
                })
                .catch((err) => {
                    console.log(err)
                    dispatch({
                        type: ERROR,
                        payload: err.message
                    })
                })
        } catch (error) {

            dispatch({
                type: ERROR,
                payload: error.message
            })

        }
    }
}

export const onUserlogut = () => {

    return (dispatch) => {
        AsyncStorage.removeItem('@token').then((respons) =>
            dispatch({
                type: LOGOUT,
                payload: ''

            })

        ).catch((err) => { console.log(err) })
    }
}

export const onUserForgotPass = (email, password) => {
    return (dispatch) => {

        try {

            dispatch({
                type: LOADING
            })
            const filter = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
            if (!(email && password)) throw new Error("all form must be filled")
            if (password.length < 8) throw new Error("password must at least 8 character")
            if (!(filter.test(email))) throw new Error("invalid email format")
            Axios.patch(userAuth + "/forgotpass", { email, password }).then((res) => {
                if (res.data.error) {
                    dispatch({
                        type: ERROR,
                        payload: res.data.message
                    })
                } else {
                    dispatch({
                        type: FORGOT,
                        payload: res.data
                    })
                }

            }).catch((err) => {
                dispatch({
                    type: ERROR,
                    payload: err.message
                })
            })
        }
        catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}






export const onNameChange = (text) => {
    return {
        type: CHANGE_NAME,
        payload: text
    }
}
export const onPhoneChange = (text) => {
    return {
        type: CHANGE_PHONE,
        payload: text
    }
}


export const onEmailChange = (text) => {
    return {
        type: CHANGE_EMAIL,
        payload: text
    }
}


export const onPasswordChange = (text) => {
    return {
        type: CHANGE_PASSWORD,
        payload: text
    }
}

export const onImageSave=(image)=>{
    return{
        type:CHANGE_IMAGE,
        payload:image
    }
}

export const onSaveToken = (token) => {
    return {
        type: AUTH_SUCCESS,
        payload: token
    }
}