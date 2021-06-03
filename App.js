import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const stack=createStackNavigator();

const globalScreenOptions={
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: {color: "white" },
  headerTinColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
      <stack.Screen name="Add Chat" component={} />
      </Stack.Navigator>     
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
