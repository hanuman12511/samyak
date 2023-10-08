import React,{useState} from 'react'
import {Text,View,StyleSheet, Image,SafeAreaView} from 'react-native'
import PrimaryInput from '../component/PrimaryInput';
import { string } from '../utils/String';
import { images } from '../assets/image/images';
import PrimaryButton from '../component/PrimaryButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PrimaryHeader from '../component/PrimaryHeader';
import { navigationconst } from '../navigation/navigationconst';

 const  RegisterScreen =({navigation})=>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordVisible,setVisiblePassword] = useState(true)
   
const onPressSignup=()=>{
    
    const body={
        name,
        email,
        password
   }
  
    console.log(body)
 navigation.navigate(navigationconst.login)
    
}

const onPressBack=()=>{
    console.log("goback");
    console.log('====================================')
    console.log(navigation)
    console.log('====================================')
    navigation.goBack()
}
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.headerview}>
           <PrimaryHeader
            buttontext={''}
            onBackPress={onPressBack}
           />
           </View>
             <KeyboardAwareScrollView>
             <View style={[styles.loginlogoview,styles.shadowProp]}>
                <Image source={images.logoimage} style={styles.loginlogoimage}/>
            </View>
            <View style={styles.pageheadingview}>
                <Text style={styles.pagetext}>{string.buttonnamesignup}</Text>
            </View>
            <View style={styles.formview}>
            <PrimaryInput
                requireText={true} 
                isvalidinput={true}
                TextLabel={string.entername} 
                requireInput={true}
                requirelogo={true}
                logoimage={images.profile}
                placeholdertext={string.placeholdertextname}
                requireeye={false}
                secureTextEntry={false}
                value={name}
                onchange={(value:any)=>{setName(value),console.log(value)}}
                isvisible={''}
                />
                <PrimaryInput
                requireText={true} 
                isvalidinput={true}
                TextLabel={string.enteremail} 
                requireInput={true}
                requirelogo={true}
                logoimage={images.email}
                placeholdertext={string.placeholdertextemail}
                requireeye={false}
                secureTextEntry={false}
                value={email}
                onchange={(value:any)=>{setEmail(value),console.log(value)}}
                isvisible={''}
                />
                 <PrimaryInput
                requireText={true} 
                isvalidinput={true}
                TextLabel={string.enterpassword} 
                requireInput={true}
                requirelogo={true}
                logoimage={images.password}
                placeholdertext={string.placeholdertextpassword}
                requireeye={true}
                secureTextEntry={passwordVisible}
                value={password}
                onchange={(value:any)=>{setPassword(value),console.log(value)}}
                isvisible={()=>{setVisiblePassword(!passwordVisible),console.log("password chnnn") }}
                />
                <PrimaryButton
                buttontext={string.buttonnamesignup}
                onpressbtn={onPressSignup}
                />
               
                </View>
                </KeyboardAwareScrollView>
       </View>
       </SafeAreaView>
      
    )

};
export default RegisterScreen
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    headerview:{
        flex:1,
        paddingHorizontal:10,
        paddingVertical:20
    },
    pageheadingview:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:30

    },
    pagetext:{
        fontSize:20,
        fontWeight:'bold'
    },

    loginlogoview:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:20,
      

    },
    loginlogoimage:{
        width:150,
        height:150

    },
    formview:{
        flex:1,
        borderRadius:20,
        backgroundColor:'#FBFAFA',
        paddingHorizontal:10,
        paddingVertical:20,
        marginHorizontal:10
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
     
  })