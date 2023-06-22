import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from'@react-native-firebase/app'
import messaging from '@react-native-firebase/messaging';
class Pushnotification extends Component {
    componentDidMount() {
      if (!firebase.apps.length){
        firebase.initializeApp({apiKey: 'AIzaSyArXVcDRYSv870r0WNUwbQbRKTNd5dwUb0',
        authDomain: 'fir-app-84a7c.firebaseapp.com',
        projectId: 'fir-app-84a7c',
        storageBucket: 'fir-app-84a7c.appspot.com',
        messagingSenderId: '292672219729',
        appId: '1:292672219729:android:6a419ec811747e2a312670',
        });
      } 
        this.configureFirebaseMessaging();
      }
      configureFirebaseMessaging = async () => {
        // Request permission for receiving notifications (optional)
        
      
        // Get the device's FCM token
        const token = await messaging().getToken();
        console.log('FCM Token:', token);
      
        // Handle incoming notifications when the app is in foreground
        messaging().onMessage(this.handleNotification);
      
        // Handle opening the app from a background state due to a notification
        messaging().onNotificationOpenedApp(this.handleNotificationOpen);
        messaging().setBackgroundMessageHandler(this.handleBackgroundMessage);
      };
      
      handleNotification = remoteMessage => {
        alert('Received notification:');
        // Handle the notification payload
      };
      
      handleNotificationOpen = remoteMessage => {
        console.log('Opened app from notification:', remoteMessage);
        // Handle the notification payload when the app is opened from a background state
      };
      handleBackgroundMessage = remoteMessage => {
        console.log('Received background message:', remoteMessage);
        // Handle the background message payload
        // Note: This handler will only be called when the app is closed or running in the background
        // You can perform background tasks, update UI, or trigger actions based on the payload
      };
    
    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Push notification using firebase </Text>
      </View>
    );
  }
}

export default Pushnotification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'red',
  },
});
