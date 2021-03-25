const { EDIT_NAME, EDIT_EMAIL, EDIT_PHONE, EDIT_IMAGE, REFRESH_EDIT_DATA, ERROR_EDIT, LOADING, LOADING_EDIT, EDIT_SUCCESS, EDIT_ADDRESS } = require("../typeRed")

const data ={
    name:'',
    email:'',
    phone:'',
    address:"",
    image:{
        uri:'',
        name:'',
        type:'',
    },
    error:'',
    loading:false,
    message:''
}


export const editReducer=(state=data,action)=>{
    switch(action.type){
        case EDIT_ADDRESS:
            return{...state,address:action.payload,error:'',loading:false,message:''}
        case EDIT_NAME:
            return{...state,name:action.payload,error:'',loading:false,message:''}
        case EDIT_EMAIL:
            return{...state,email:action.payload,error:'',loading:false,message:''}
        case EDIT_PHONE:
            return{...state,phone:action.payload,error:'',loading:false,message:''}
        case EDIT_IMAGE:
            return{...state,image:{uri:action.payload.uri,name:action.payload.fileName,type:action.payload.type},error:'',loading:false,message:''}
        case REFRESH_EDIT_DATA:
            return{image:{uri:'',name:'',type:''},name:'',email:'',phone:'',error:'',loading:false,message:''}
        case ERROR_EDIT:
            return{...state,loading:false,error:action.payload}
        case LOADING_EDIT:
            return{...state,loading:true,error:''}
        case EDIT_SUCCESS:
            return{...state,loading:false,message:action.payload,error:''}
        default:
            return state
    }
}