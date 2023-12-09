import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from './screens/LoginScreen';
import LandingScreen from './screens/LandingScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import RecoveryScreen from './screens/RecoveryScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen options={{headerShown: false}} name='Landing' component={LandingScreen}/>
          <Stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
          <Stack.Screen options={{headerShown: false}} name='Signup' component={SignupScreen}/>
          <Stack.Screen options={{headerShown: false}} name='Home' component={HomeScreen}/>
          <Stack.Screen options={{headerShown: false}} name='Recovery' component={RecoveryScreen}/>
        </Stack.Navigator>
      </NavigationContainer> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});