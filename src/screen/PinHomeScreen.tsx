import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'
import { navigationconst } from '../navigation/navigationconst'
import PrimaryButton from '../component/PrimaryButton'
import { string } from '../utils/String'
import PrimaryInput from '../component/PrimaryInput'
import { images } from '../assets/image/images'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
function PinHomeScreen({navigation}){
    const opresspin=()=>{
        navigation.navigate(navigationconst.home)
    }
   
    return(
    <View style={styles.container}>
        <View style={styles.maincontainer}>
         <KeyboardAwareScrollView style={{flex:1}}>
        <View style={styles.mainlogoimage}>
        <Image source={images.logoimage} style={styles.logoimage}/>
        </View>
        
       
    <View style={styles.pinviewcontainer}>
        <View style={{alignItems:'center'}}>
             <Text style={{alignItems:'center',fontSize:30}}>Enter Pin</Text>
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
        </KeyboardAwareScrollView>
        </View>
        </View>
    )
}
 
export default PinHomeScreen


const styles=StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#fff',
    

  },
  maincontainer:{
    flex:1,
    backgroundColor:'#fff',
    borderRadius:40,

  },
  pinview:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginHorizontal:20
  },
 logoimage:{
    width:200,
    height:200

},
mainlogoimage:{
    alignItems:'center',
    marginVertical:40
},
pinviewcontainer:{
flex:1,
backgroundColor:'#EAEAEA',
borderRadius:40,
paddingVertical:30,
}
})