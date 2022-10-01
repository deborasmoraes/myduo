
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-vector-icons"
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Duos from './duos'
import Perfil from './perfil'
import Encontrar from './encontrar'
import Jogos from './jogo';
import Config from './config'

const Tab = createBottomTabNavigator()


export default function Principal() {
  return (

    <NavigationContainer
      independent={true}>
      <Tab.Navigator
      tabBarOption={{
        style:{
          backgroundColor: '#00182F' ,
          borderTopColor: 'transparent'}
      }}
      >
        <Tab.Screen name="Perfil" component={Perfil}
        />
        <Tab.Screen name="Jogos" component={Jogos}
        />
        <Tab.Screen
          name="Encontrar" component={Encontrar}
        />
        <Tab.Screen name="Duos" component={Duos}
        />
        <Tab.Screen
          name="Configurações" component={Config}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

// export function Routes() {
//   const Stack = createNativeStackNavigator()
//   return (
//     <NavigationContainer>
//       <GamesContexts.Provider value={games}>
//         <Stack.Navigator>
//           <Stack.Screen name="Jogos" component={Jogos} />
//           <Stack.Screen name="perfil" component={Perfil} />
//           <Stack.Screen />
//         </Stack.Navigator>
//       </GamesContexts.Provider>
//     </NavigationContainer>
//   )
// }

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',

    justifyContent: 'center',
  },
});
