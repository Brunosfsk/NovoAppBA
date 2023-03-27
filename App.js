import React from "react";
import { NativeBaseProvider } from "native-base";
/* import Home from './src/pages/home'; */
import Router from './src/routers/router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    
    <NativeBaseProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>   
    
    
  );
}