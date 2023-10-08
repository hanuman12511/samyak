import React from 'react'
import {Text,View,StyleSheet,Image,TextInput, TouchableOpacity} from 'react-native'
import { images } from '../assets/image/images'


interface PrimaryHeaderProps {
    buttontext:any
    onBackPress:any

  }
  
  const PrimaryHeader: React.FC<PrimaryHeaderProps> = props => {
    
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onBackPress} style={styles.goback}>
                <Image source={images.back} style={styles.backimage}/>
            </TouchableOpacity>
        </View>
        )
    }
    export default PrimaryHeader;
    
    
    const styles=StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
           
           },
     
        backimage:{
           
            width:30,
            height:30,
           
           },
        goback:{
            alignItems:'center',
            justifyContent:'center',
          height:50,
           width:40,
           
            
           }
        
    })