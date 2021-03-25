import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'


export const getStar=(countStar)=>{
    let output=[]

    for(var i =0;i<countStar;i++){
        output.push(<Icon name="star" color='yellow' key={i}/>)
    }
    return output
}