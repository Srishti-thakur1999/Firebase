import React,{Component}from'react'
import {Text,View,StyleSheet}from'react-native'
import Pushnotification from './Push Notification/Pushnotification'
class FirebaseApp extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Pushnotification/>
      </View>
    )
  }
}
export default FirebaseApp