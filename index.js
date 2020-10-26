/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';
import ChatComponent from './Components/ChatComponent';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);

Navigation.registerComponent('com.myApp.WebSocketChat', () => ChatComponent);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'com.myApp.WelcomeScreen'
             }
           }
         ]
       }
     }
  });
});