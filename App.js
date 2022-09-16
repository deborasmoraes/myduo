import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Init from './src/componentes/inicial'
import PageLogin from './src/componentes/login';
import PageRegistrar from './src/componentes/pageRegistrar';
import Redefinir from './src/componentes/redefinirsenha'
import Duos from './src/componentes/duos';
import Principal from './src/componentes/principal';
import Perfil from './src/componentes/perfil';
import Encontrar from './src/componentes/encontrar'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
     options={{title: '', headerTransparent: true,
    headerShown: false}}
     name="Home" component={Init} />
    <Stack.Screen 
    options={{title: '', headerTransparent: true,
    headerShown: false}}
    name="Login" component={PageLogin} />
    <Stack.Screen name="Registrar" component={PageRegistrar}/>
    <Stack.Screen name="Redefinir" component={Redefinir}/>
    <Stack.Screen name="Duos" component={Duos}/>
    <Stack.Screen name="Principal" component={Principal}/>
    <Stack.Screen name="Perfil" component={Perfil}/>
    <Stack.Screen name="Encontrar" component={Encontrar}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
