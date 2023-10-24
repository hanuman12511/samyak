import React from 'react'
import {Text,View,StyleSheet,Image,TextInput, TouchableOpacity} from 'react-native'
import { images } from '../assets/image/images'
import { colors } from '../assets/Color'


interface PrimaryButtonProps {
    buttontext:any
    onpressbtn:any

  }
  
  const PrimaryButton: React.FC<PrimaryButtonProps> = props => {
    
    return(
        <TouchableOpacity style={styles.container} onPress={props.onpressbtn}>
            <Text style={styles.buttontext}>{props.buttontext}</Text>

        </TouchableOpacity>
    )
}
export default PrimaryButton;


const styles=StyleSheet.create({
    container:{
       marginHorizontal:10,
       marginVertical:10,
        borderWidth:.6,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        borderColor:'gray',
        backgroundColor:colors.color1,
        justifyContent:'center',
        
    },
    buttontext:{
        color:'#fff',
        fontSize:20,
        paddingVertical:10

    }
})