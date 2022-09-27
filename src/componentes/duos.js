import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Amigos from './amigos'
import Conversas from './conversas'
import Solicitacoes from './solicitacoes'
import Jogos from './jogo';

const Tab = createMaterialTopTabNavigator();

export default function Duos() {
    return (
        <Tab.Navigator
            initialRouteName="Amigos"
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: '#add8e6', alignItems: 'center' },
            }}
        >
            <Tab.Screen name="Amigos" component={Amigos} />
            <Tab.Screen name="Conversas" component={Conversas} />
            <Tab.Screen name="Solicitações" component={Solicitacoes} />
            <Tab.Screen name = "Jogos" component = {Jogos}/>
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    infos: {
        backgroundColor: '',
    },
});