import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
export default function ToastScreen(){
    return(
        <View style={styles.container}>
            <Text>Toast</Text>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        position:'absolute',
        top:20,
        left:10,
        right:20

    }


})