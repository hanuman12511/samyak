import React,{useState,useEffect} from 'react'
import {Text,View,StyleSheet,ScrollView,Image} from 'react-native'
import { images } from '../assets/image/images'
import { useFocusEffect } from '@react-navigation/native'


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
            <Image source={images.logoimage} style={styles.profileimage}/>
            </View> 
                
            <View style={styles.profileviewcenter}>
                <Text>Well-Come</Text>     
                <Text>Hanuman</Text>     
                </View> 
                
            <View style={styles.profileviewright}>
            <Image source={images.logoimage} style={styles.notifyimage}/>
           
                </View> 
            </View>
            <View style={styles.timeview}>
            <Text>{date}</Text>
            </View>
            <View style={styles.branchview}>
                <ScrollView>

                </ScrollView>

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
    backgroundColor:'#fff',

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

  profileviewleft:{
    borderRadius:50,
    overflow:'hidden',
    backgroundColor:'red'
   
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
    width:40,
    height:40,
    borderRadius:50
   
  },
  branchview:{
    flex:1,
    backgroundColor:'#fff'
  }
})