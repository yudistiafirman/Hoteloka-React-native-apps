const { LOADING_CREDENTIAL, ERROR_CREDENTIAL, FETCH_CREDENTIAL, UPDATE_SUCESS, CHANGE_IMAGE, CHANGE_CREDENTIAL_NAME, CHANGE_CREDENTIAL_PHONE, CHANGE_CREDENTIAL_EMAIL, CHANGE_CREDENTIAL_ADDRESS, CHANGE_CREDENTRIAL_PASSWORD } = require("../typeRed")


const data ={
    loading:false,
    error:'',
    id:'',
    name:'',
    email:'',
    phone:'',
    image:'',
    message:""
}


const credentialReducer=(state=data,action)=>{

    switch(action.type){
        case LOADING_CREDENTIAL:
            return {...state,loading:true}
        case ERROR_CREDENTIAL:
            return {...state,error:action.payload}
        case FETCH_CREDENTIAL:
            return {...state,loading:false,error:'',id:action.payload.id,name:action.payload.fullname,email:action.payload.email,phone:action.payload.phone,image:action.payload.profile_image}
       
       
        default:
            return state
    }
}

export default credentialReducer