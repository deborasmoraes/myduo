
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Duos from './duos'
import Perfil from './perfil'
import Encontrar from './encontrar'

const Tab = createBottomTabNavigator()


export default function App() {
  return (
  
  <NavigationContainer independent={true}>
    <Tab.Navigator>
    <Tab.Screen name="Encontrar" component={Encontrar} />
    <Tab.Screen name="Perfil" component={Perfil} />
    <Tab.Screen name="Duo's" component={Duos}/>
  </Tab.Navigator>
  </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
  
    justifyContent: 'center',
  },
});
