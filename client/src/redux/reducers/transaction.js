const { FETCH_DATA, LOADING_TRANS, TRANS_ERROR, TRANS_SUCCESS, GET_HISTORY } = require("../typeRed")

const data={
        error:'',
        loading:false,
        transaction:null,
        history:null,
        message:null
}
    

export const transactionReducer=(state=data,action)=>{
    switch(action.type){
        case FETCH_DATA:
            return {...state,loading:false,transaction:action.payload,error:''}
        case LOADING_TRANS:
            return {...state,loading:true}
        case TRANS_ERROR:
            return {...state,loading:false,error:action.payload}
        case TRANS_SUCCESS:
            return{...state,loading:false,message:action.payload}
        case GET_HISTORY:
            return{...state,history:action.payload,loading:false}
        default:
            return state
    }

}