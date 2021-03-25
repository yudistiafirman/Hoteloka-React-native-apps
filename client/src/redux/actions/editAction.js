import ImagePicker from 'react-native-image-picker'
import { EDIT_ADDRESS, EDIT_EMAIL, EDIT_IMAGE, EDIT_NAME, EDIT_PHONE, EDIT_SUCCESS, ERROR_EDIT, LOADING_EDIT, REFRESH_EDIT_DATA } from '../typeRed'
import Axios from 'axios'
import { userAuth } from '../../constants/Api'

export const onChangeImage=()=>{


    return (dispatch)=>{

    
    ImagePicker.showImagePicker({storageOptions:{privateDirectory:true}}, (response) => {
       
       
        if (response.didCancel) {
    
        } else if (response.error) {
 
        } else if (response.customButton) {
         
        } else {
            dispatch({
                type:EDIT_IMAGE,
                payload:response
            })
            
        }
    })
}
}

export const onSaveDataToEdit=(id,image,phone,email,address,name)=>{
    return (dispatch)=>{
            try {
        const fd =new FormData()
        const data={}
        const imageData={}
        if(name)data.fullname=name
        if(phone)data.phone=phone
        if(email)data.email=email
        if(address)data.address=address
     
                
        fd.append('profile_data',JSON.stringify(data))
        if(image.uri && image.name && image.type){
            imageData.uri=image.uri
            imageData.name=image.name
            imageData.type=image.type
            fd.append('image_1',imageData)
         
        }
      
        dispatch({
            type:LOADING_EDIT
        })

        Axios.patch(userAuth+'updatecredential/'+id,fd).then((res)=>{
                    if(res.data.error){
                        dispatch({
                            type:ERROR_EDIT,
                            payload:res.data.message
                        })
                    }else{
                        dispatch({
                            type:EDIT_SUCCESS,
                            payload:res.data.message
                        })
                    }
    }).catch((err)=>{
        console.log(err)
    })
            } catch (error) {
               console.log(error) 
            }

    }
        
      
        
}

export const onEditName=(text)=>{
    return {
        type:EDIT_NAME,
        payload:text
    }
}

export const onEditEmail=(text)=>{
    return{
        type:EDIT_EMAIL,
        payload:text
    }
}

export const onEditPhone=(text)=>{
    return{
        type:EDIT_PHONE,
        payload:text
    }
}

export const onEditAddress=(text)=>{
    return{
        type:EDIT_ADDRESS,
        payload:text
    }
}

export const onRefreshEdit=()=>{
    return{
        type:REFRESH_EDIT_DATA
    }
}