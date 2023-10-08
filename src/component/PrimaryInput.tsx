import React from 'react'
import {Text,View,StyleSheet,Image,TextInput, TouchableOpacity} from 'react-native'
import { images } from '../assets/image/images'


interface PrimaryInputProps {
     isvalidinput:any
     requireText:any
     TextLabel:any
     requireInput:any
     placeholdertext:any
     requirelogo:any
     logoimage:any
     requireeye:any
     secureTextEntry:any
     value:any
     onchange:any
     isvisible:any

  }
  
  const PrimaryInput: React.FC<PrimaryInputProps> = props => {
    
    return(
        <View style={styles.container}>
             {props.requireText?
                <View style={styles.labelview}>
                    <Text style={[{color:'',fontSize:20},{}]}>{props.TextLabel}</Text>
                    { props.isvalidinput&&<Text style={styles.requirefield}>{'*'}</Text>}
                </View>
                
            :   null
            }
            {props.requireInput&&<View style={styles.inputtypeview}>
               {props.requirelogo&& <Image source={props.logoimage}style={styles.inputlogo}/>}
               <TextInput 
                secureTextEntry={props.secureTextEntry}
                style={styles.inputtext}
                placeholder={props.placeholdertext}
                value={props.value}
                onChangeText={props.onchange}
                />
                  {props.requireeye&&
                  <TouchableOpacity onPress={props.isvisible}> 
                  <Image source={images.eye}style={styles.inputlogo}/>
                  </TouchableOpacity>}
            </View>}
        </View>
    )
  }
  export default PrimaryInput;

  const styles=StyleSheet.create({
    container:{
       paddingHorizontal:10,
    },
    labelview:{
       flexDirection:'row',
    },
    requirefield:{
        color:'red',
        fontSize:20,
        marginLeft:5,
        alignItems:'center',
    },
    inputtypeview:{
        marginVertical:10,
        borderWidth:.6,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        borderColor:'gray'
    },
    inputtext:{
        flex:1,
        
    },
    inputlogo:{
        
        marginHorizontal:10,
        width:30,
        height:30
    }
  })