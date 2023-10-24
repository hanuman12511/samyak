import React,{useState} from 'react'
import {Text,View,StyleSheet, Image} from 'react-native'
import PrimaryInput from '../component/PrimaryInput';
import { string } from '../utils/String';
import { images } from '../assets/image/images';
import PrimaryButton from '../component/PrimaryButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigationconst } from '../navigation/navigationconst';
 const  LoginScreen =({navigation})=>{
   
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordVisible,setVisiblePassword] = useState(true)
   
const onPressLogin=()=>{
    console.log("login ");
    const body={
       
        email,
        password
   }
  
    console.log(body)
    navigation.navigate(navigationconst.pinhome)
    
}
const onpresssignup=()=>{
    console.log("sing");
    navigation.navigate(navigationconst.register)
    
}

    return(
        <View style={styles.container}>
          
             <KeyboardAwareScrollView>
             <View style={[styles.loginlogoview,styles.shadowProp]}>
                <Image source={images.logoimage} style={styles.loginlogoimage}/>
            </View>
            <View style={styles.pageheadingview}>
                <Text style={styles.pagetext}>{string.buttonname}</Text>
            </View>
            <View style={styles.formview}>
           
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
                buttontext={string.buttonname}
                onpressbtn={onPressLogin}
                />
                <View style={styles.signupview}>
                <Text style={styles.signuptext}>
                    Don't have an acount ?
                </Text>
                <TouchableOpacity onPress={onpresssignup}>
                    <Text style={styles.signuponptresstext}>Sign up</Text>
                </TouchableOpacity>
                </View>
                </View>
                </KeyboardAwareScrollView>
            
       </View>
      
    )

};
export default LoginScreen
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    pageheadingview:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:20

    },
    pagetext:{
        fontSize:20,
        fontWeight:'bold'
    },
    loginlogoview:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:30,
      

    },
    loginlogoimage:{
        width:200,
        height:200

    },
    formview:{
        flex:1,
        borderRadius:20,
        backgroundColor:'#EAEAEA',
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
      signupview:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },
      signuptext:{
        marginHorizontal:10
      },
      signuponptresstext:{
        color:'blue',
        fontWeight:'bold'
      },
  })