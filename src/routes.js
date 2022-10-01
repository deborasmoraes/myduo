import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Init from './componentes/inicial'
import PageLogin from './componentes/login';
import PageRegistrar from './componentes/pageRegistrar';
import Redefinir from './componentes/redefinirsenha'
import Duos from './componentes/duos';
import Principal from './componentes/principal';
import Perfil from './componentes/perfil';
import Encontrar from './componentes/encontrar'
import Jogos from './componentes/jogo';


const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: '', headerTransparent: true,
            headerShown: false
          }}
          name="Home" component={Init} />
        <Stack.Screen
          options={{
            title: '', headerTransparent: true,
            headerShown: false
          }}
          name="Login" component={PageLogin} />
        <Stack.Screen
          options={{
            title: '', headerTransparent: true,
            headerShown: false
          }}
          name="Registrar" component={PageRegistrar} />
        <Stack.Screen name="Redefinir" component={Redefinir} />
        <Stack.Screen name="Duos" component={Duos} />
        <Stack.Screen
          options={{
            title: '', headerTransparent: true,
            headerShown: false
          }}
          name="Principal" component={Principal} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Encontrar" component={Encontrar} />
        <Stack.Screen name="Jogos" component={Jogos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
