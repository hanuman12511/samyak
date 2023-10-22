import React,{useState,useEffect,useContext} from 'react'
import {Text,View,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native'
import { images } from '../assets/image/images'
import DropDown from '../component/DropDown';
import {course} from '../data/data'
import { Context } from '../utils/Context';

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


const batchshow = useContext(Context)
console.log('====================================');
console.log("=>>",batchshow);
console.log('====================================');
  const[date ,setDate] = useState('')
    const [value, setValue] = useState(null);
    const[isvaliduser ,setValidUser] = useState(false)
    const[name ,setUserName] = useState("hanu")
    const[addbatch ,setAddBatch] = useState('')
    const[batch ,setBatch] = useState(false)
    useEffect(()=>{
       
        const interval = setInterval(() => {
            setDate(new Date().toLocaleString());
          }, 1000);
          return () => clearInterval(interval);


    },[])
    const userlogin=()=>{
      setValidUser(true)
    }
  const userlogout=()=>{
      alert("Logout")
      setValidUser(false)
    }
  
    const onpressbatch=()=>{
    
      setBatch(true)
      batchshow.push(addbatch)
    }

  const onPressValue=(branch:any)=>{
    let branchnme =[]
      course.map(bar=>{
        Object.keys(bar).map(d=>{
           if(d===branch){
           branchnme.push(bar[d])
           }
          })
        })
    branchnme[0].map(d=>{
        if(name == Object.keys(d)){
          setAddBatch(d[name]);
      }
  })
  setValue(branch)
}

 return(
        <View style={styles.container}>
            <View style={styles.profileview}>
            <View style={styles.profileviewleft}>
            <Image source={images.user} style={styles.profileimage}/>
            </View> 
                
            <View style={styles.profileviewcenter}>
                <Text>WellCome</Text>     
                <Text>{name}</Text>     
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
            value={value}
            setValue={(value:any)=>onPressValue(value)}
            />
            <View style={styles.showbatchview}>
                
           {value&& 
           <View style={styles.branchlogin}>
             <View style={styles.branchloginin}>
                <Text style={styles.branchname}>{value}</Text>
               { !isvaliduser?
                <TouchableOpacity style={styles.onpresslogin} onPress={userlogin}>
                    <Text style={{fontWeight:'bold'}}>Login</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.onpresslogin} onPress={userlogout}>
                    <Text style={{fontWeight:'bold'}}>Log-Out</Text>
                </TouchableOpacity>
               
                }
                </View>
                  {isvaliduser&&
                <View>
                  <View style={{width:'100%',height:1,backgroundColor:'gray',marginTop:10}}/> 
                    <View style={{paddingHorizontal:20,paddingVertical:20}}>
                      <TouchableOpacity style={styles.batchonpress} onPress={onpressbatch}>
                        <Text style={styles.batchname}>Show All Batch</Text>
                      </TouchableOpacity>
                    </View>
                 </View>
                 }
            </View>
            }
            
           {batch&& <View style={styles.showbatch}>
           <View style={styles.showbatchview1}>
             <Text style={styles.title}>{'Course'}</Text>
             <Text style={styles.title}>{'Time'}</Text>
             <Text style={styles.title}>{'Num Of Stu.'}</Text>
            
            </View>
             {addbatch.map(d=>(
              <View style={styles.showbatchview1}>
            <Text style={styles.title}>{d.course}</Text>
            <Text style={styles.title}>{d.time}</Text>
            <Text style={styles.title}>{d.numofstudents}</Text>
            </View>
             ))
          
          }
          </View>
          }
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
    flex:1,
  },
  showbatch:{
    borderRadius:20,
  marginVertical:10,
  marginHorizontal:10,
  paddingHorizontal:20,
  paddingVertical:20,
    backgroundColor:'gray',
   
    justifyContent:'space-between'
  },
showbatchview1:{
  borderRadius:20,
  paddingHorizontal:20,
  paddingVertical:5,
  backgroundColor:'gray',
  flexDirection:'row',
  justifyContent:'space-between'
},
branchlogin:{

 backgroundColor:'red',
 marginHorizontal:15,
 borderRadius:20
},
branchloginin:{
     flexDirection:'row',
     paddingHorizontal:30,
    },
onpresslogin:{
    flex:1,
    marginVertical:10,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
},
batchonpress:{
  justifyContent:'center',
  alignItems:'center',
 
},
branchname:{
    flex:1,
     alignItems:'center',
    paddingVertical:20,
    justifyContent:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
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
  },
  batchname:{
    color:'#fff',
    fontSize:20
  },
  title:{
    fontWeight:'bold',
    color:'#fff'
  }
})