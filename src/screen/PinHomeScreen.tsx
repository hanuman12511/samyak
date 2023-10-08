import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import { navigationconst } from '../navigation/navigationconst'
import PrimaryButton from '../component/PrimaryButton'
import { string } from '../utils/String'
import PrimaryInput from '../component/PrimaryInput'
import { images } from '../assets/image/images'

function PinHomeScreen({navigation}){
    const opresspin=()=>{
        navigation.navigate(navigationconst.home)
    }
   
    return(
    <View style={styles.container}>
        <View style={{flex:1}}>
        <View style={{alignItems:'center'}}>
             <Text style={{alignItems:'center'}}>Enter Pin</Text>
        </View>
        <View style={styles.pinview}>
            <View style={{flex:1}}>
            <PrimaryInput
                requireText={false} 
                isvalidinput={true}
                TextLabel={string.enteremail} 
                requireInput={true}
                requirelogo={false}
                logoimage={images.email}
                placeholdertext={''}
                requireeye={false}
                secureTextEntry={false}
                value={''}
                onchange={(value:any)=>{console.log(value)}}
                isvisible={''}
                />
                </View>
                <View style={{flex:1}}>
            <PrimaryInput
                requireText={false} 
                isvalidinput={true}
                TextLabel={string.enteremail} 
                requireInput={true}
                requirelogo={false}
                logoimage={images.email}
                placeholdertext={''}
                requireeye={false}
                secureTextEntry={false}
                value={''}
                onchange={(value:any)=>{console.log(value)}}
                isvisible={''}
                />
                </View>
                <View style={{flex:1}}>
            <PrimaryInput
                requireText={false} 
                isvalidinput={true}
                TextLabel={string.enteremail} 
                requireInput={true}
                requirelogo={false}
                logoimage={images.email}
                placeholdertext={''}
                requireeye={false}
                secureTextEntry={false}
                value={''}
                onchange={(value:any)=>{console.log(value)}}
                isvisible={''}
                />
                </View>

                <View style={{flex:1}}>
            <PrimaryInput
                requireText={false} 
                isvalidinput={true}
                TextLabel={string.enteremail} 
                requireInput={true}
                requirelogo={false}
                logoimage={images.email}
                placeholdertext={''}
                requireeye={false}
                secureTextEntry={false}
                value={''}
                onchange={(value:any)=>{console.log(value)}}
                isvisible={''}
                />
                </View>
            </View>
            <PrimaryButton
            buttontext={string.submit}
            onpressbtn={opresspin}/>
            </View>
        </View>
    )
}
 
export default PinHomeScreen


const styles=StyleSheet.create({
    container:{
       flex:1,
  },
  pinview:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginHorizontal:20
  }
})