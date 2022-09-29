import { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import GamesContexts from "../contexts/gamesContexts";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfil from "./perfil";


export default function Jogos({ navigation, props }) {
    const [games, setGames] = useState([null])

    function addGame(game) {
        setGames((old) =>[...old, game])
        console.log(games);
    }
    return (
        <View>
            <TouchableOpacity onPress={() => { addGame('Apex Legends') }}
            ><Image
                    style={{ width: 50, height: 20 }}
                    source={require("../images/apex.jpg")} /> <Text>Apex legends</Text></TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => { addGame('Dota 2') }}><Image
                    style={{ width: 50, height: 20 }}
                    source={require("../images/dota.jpg")} /> <Text>DOTA 2</Text></TouchableOpacity>
            
            <TouchableOpacity onPress ={() =>{addGame('Counter strike: Global Offensive')}}><Image
                style={{ width: 50, height: 20 }}
                source={require("../images/cs.jpg")} /> <Text>Counter strike: Global Offensive</Text></TouchableOpacity>

            <TouchableOpacity onPress ={() =>{addGame('Fortnite')}}><Image
                style={{ width: 50, height: 20 }}
                source={require("../images/fortinaiti.jpg")} /> <Text>Fortnite</Text></TouchableOpacity>

            <TouchableOpacity onPress ={() =>{addGame('League Of Legends')}}><Image
                style={{ width: 50, height: 20 }}
                source={require("../images/lol.jpg")} /> <Text>League Of Legends</Text></TouchableOpacity>

            <TouchableOpacity onPress ={() =>{addGame('Valorant')}}><Image
                style={{ width: 50, height: 20 }}
                source={require("../images/apex.jpg")} /> <Text>Valorant</Text></TouchableOpacity>

            <Text>{games}</Text>
            <TouchableOpacity onPress ={() =>{navigation.navigate('perfil')}}><Text>Salvar</Text></TouchableOpacity>
        </View>



    )

}

export  function Routes(){
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <GamesContexts.Provider value = {games}>
            <Stack.Navigator>
                <Stack.Screen name = "Jogos" component = {Jogos}/>
                <Stack.Screen name = "perfil" component = {Perfil}/>
                <Stack.Screen/>
            </Stack.Navigator>
            </GamesContexts.Provider>
        </NavigationContainer>
    )
}
