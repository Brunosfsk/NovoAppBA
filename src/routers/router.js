import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* import Home from '../src/pages/home'; */
import Pedidos from '../pages/pedidos';
import MinhaConta from '../pages/minhaConta';
import { SimpleLineIcons, Feather, Entypo } from '@expo/vector-icons';
import StackRouter from './StackRouter';

const Tab = createBottomTabNavigator();

 function Router() {
  return (
      <Tab.Navigator>
        <Tab.Screen 
        name="Home" 
        component={StackRouter} 
        options={{
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
          },
          /* headerShown:false, */
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={24} color="black" />
          )
        }}
        />

        <Tab.Screen 
        name="Promoções" 
        component={Pedidos} 
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="fire" size={24} color="grey" />
          )
        }}
        />
        

        <Tab.Screen 
        name="Pedidos" 
        component={MinhaConta} 
        options={{
          headerTitleStyle: {
            color: 'white'
          },
          tabBarIcon: () => (
            <Entypo name="list" size={24} color="grey" />
          )
        }}
        />

        <Tab.Screen 
        name="Minha conta" 
        component={MinhaConta} 
        options={{
          headerTitleStyle: {
            color: 'white'
          },
          tabBarIcon: ({ size, color }) => (
            <Feather name='user' size={size} color={color}/>
          )
        }}
        />

      </Tab.Navigator>
  );
}

export default Router;