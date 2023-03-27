import Home from '../pages/home';
import Pedidos from '../pages/pedidos';
import MinhaConta from '../pages/minhaConta';
import { Feather, Entypo } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
/* import { Header } from '@react-navigation/stack'; */


const Stack = createNativeStackNavigator();

 function StackRouter() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          tabBarIcon: ({ size, color }) => (
            <Feather name='search' size={size} color={color}/>
          )
        }}
        />
        
        <Stack.Screen 
        name="Minhas viagens" 
        component={MinhaConta} 
        options={{
          headerShown: false,
          headerTitleStyle: {
            color: 'white'

          },
          tabBarIcon: () => (
            <Entypo name="suitcase" size={24} color="grey" />
          )
        }}
        />

        <Stack.Screen 
        name="Pedidos" 
        component={Pedidos} 
        options={{
          headerShown: false,
          headerTitleStyle: {
            color: 'white'
          },
          tabBarIcon: ({ size, color }) => (
            <Feather name='user' size={size} color={color}/>
          )
        }}
        />

        <Stack.Screen 
        name="MinhaConta" 
        component={MinhaConta} 
        options={{
          headerShown: false,
          headerTitleStyle: {
            color: 'white'
          },
          tabBarIcon: ({ size, color }) => (
            <Feather name='user' size={size} color={color}/>
          )
        }}
        />

      </Stack.Navigator>
  );
}

export default StackRouter;