import React,{useState,useEffect} from 'react'
import {Text,View,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native'
import { images } from '../assets/image/images'
import { useFocusEffect } from '@react-navigation/native'
import DropDown from '../component/DropDown';

const data = [
    { label: 'Jhotwara', value: '1' },
    { label: 'Niwaru', value: '2' },
    { label: 'VDN', value: '3' },
    { label: 'Rajapark', value: '4' },
    { label: 'GPL', value: '5' },
    { label: 'Sodala', value: '6' },
    { label: 'Mansrover', value: '7' },
    { label: 'Vishali', value: '8' },
  ];

function HomeScreen(){
    const[date ,setDate] = useState('')
    useEffect(()=>{
       
        const interval = setInterval(() => {
            setDate(new Date().toLocaleString());
          }, 1000);
          return () => clearInterval(interval);


    },[])
    
    return(
        <View style={styles.container}>
            <View style={styles.profileview}>
            <View style={styles.profileviewleft}>
            <Image source={images.user} style={styles.profileimage}/>
            </View> 
                
            <View style={styles.profileviewcenter}>
                <Text>WellCome</Text>     
                <Text>Hanuman</Text>     
                </View> 
                
            <View style={styles.profileviewright}>
            <Image source={images.notification} style={styles.notifyimage}/>
           
                </View> 
            </View>
            <View style={styles.timeview}>
            <Text>{date}</Text>
            <View style={styles.workhours}>
                <Text style={styles.totaltext}>Total Work :</Text>
                <Text style={styles.hours}>12 Hours</Text>
            </View>
            </View>
            <View style={styles.branchview}>
            <DropDown
            data={data}
            />
            <View style={styles.showbatchview}>
                
            <View style={styles.branchlogin}>
                <Text style={styles.branchname}>Jhotwara</Text>
                <TouchableOpacity style={styles.onpresslogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.showbatchview}>

            </View>
            </View>
              

            </View>

        </View>
    )
}
 
export default HomeScreen


const styles=StyleSheet.create({
    container:{
       flex:1,
  },
  profileview:{
    flexDirection:'row',
    marginHorizontal:10,
    paddingHorizontal:10,
    paddingVertical:10,
    alignItems:'center',
    borderRadius:30,
    marginVertical:5,
  
  },
  timeview:{
    flexDirection:'row',
    marginHorizontal:10,
    paddingHorizontal:10,
    paddingVertical:10,
    alignItems:'center',
    borderRadius:30,
    marginVertical:5,
    backgroundColor:'#fff',
  },
  workhours:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
},
totaltext:{
    color:'blue',
    fontWeight:'bold'
},

hours:{
    backgroundColor:'blue',
color:'#fff',
padding:10,
borderRadius:20,
marginLeft:10
},

showbatchview:{
    flex:1
},
branchlogin:{
  marginHorizontal:15,
     flexDirection:'row',
     paddingHorizontal:20,
     backgroundColor:'red',
     borderRadius:20
},
onpresslogin:{
    flex:1,
   
    paddingVertical:20,
    
    justifyContent:'center'
},
branchname:{
    flex:1,
     alignItems:'center',
    paddingVertical:20,
    justifyContent:'center'
},

  profileviewleft:{
    borderRadius:50,
    overflow:'hidden',
  
   
},
   profileimage:{
    width:70,
    height:70,
    borderRadius:50
   
  },
 
  profileviewcenter:{
    flex:3,
    paddingHorizontal:20
  },
  profileviewright:{
    borderRadius:50,
    borderWidth:2,
    padding:5
   
  },
  notifyimage:{
    width:30,
    height:30,
    borderRadius:50
   
  },
  branchview:{
    flex:1,
    backgroundColor:'#fff',
    borderRadius:20,
    paddingVertical:20
  }
})