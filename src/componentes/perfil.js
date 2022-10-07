import { Text, TextInput, TouchableOpacity, View, StyleSheet, Modal, FlatList, SafeAreaView } from 'react-native';
import { useEffect, useState, useRef, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jogos from './jogo'
import GamesContext from '../contexts/gamesContexts'
import { TextInputMask } from 'react-native-masked-text';

export default function Perfil({ navigation }) {
    const [trueFalse, setTrueFalse] = useState(true)
    const [descricao, setDescricao] = useState("lorem ipsum")
    const [games, setGames] = useState(['aaa' ,  'bbbb', 'cccc'])
    const [start, setStart] = useState('18:00')
    const [end, setEnd] = useState('21:00')
    const DATA = [
        {
          idjogo: "1",
          game: "aaaa",
        },
        {
          idjogo: "2",
          title: "Valorant",
        },
        {
          idjogo: "3",
          title: "Cs",
        },
      ];
      

    return (
        <View>

            <Text>Username</Text>

            {(trueFalse === true) ? <Text>{descricao}</Text> : <TextInput
                onChangeText={setDescricao}
                defaultValue={descricao}></TextInput>}

            <Text>Descrição</Text>

            <Text>Eu jogo em:</Text>
            

            <Text>Jogos favoritos</Text>

            {(trueFalse === true) ? <SafeAreaView>
          <FlatList
            data = {DATA}
            renderItem = {({item}) =>{return(<Text>{item.title}</Text>)}}
            keyExtractor = {item  =>{item.id}}
          />
          </SafeAreaView> :<Jogos/>} 
            <Text>Horarios disponiveis</Text>

            <View>
                <Text>inicio</Text>
                {(trueFalse === true)?<Text>{start}</Text>: <TextInputMask type={'datetime'} options = {{format: 'HH:MM'}} onChangeText = {setStart} value = {start}/>}
            </View>

            <View>
                <Text>Fim</Text>
                {(trueFalse === true)?<Text>{end}</Text>: <TextInputMask type={'datetime'} options = {{format: 'HH:MM'}} onChangeText = {setEnd} value = {end}/>}
            </View>
            {(trueFalse === true) ? <TouchableOpacity
                onPress={() => { setTrueFalse(false) }}
            ><Text>Editar</Text></TouchableOpacity> : <TouchableOpacity
                onPress={() => { setTrueFalse(true) }}
            ><Text>Salvar</Text></TouchableOpacity>}

            <Text>{games}</Text>

        </View>
    )
}

// export  function Routes(){
//     const Stack = createNativeStackNavigator()
//     return(
//         <NavigationContainer>
//             <GamesContexts.Provider value = {games}>
//             <Stack.Navigator>
//                 <Stack.Screen name = "Jogos" component = {Jogos}/>
//                 <Stack.Screen name = "perfil" component = {Perfil}/>
//                 <Stack.Screen/>
//             </Stack.Navigator>
//             </GamesContexts.Provider>
//         </NavigationContainer>
//     )
//   }

const styles = StyleSheet.create({
    camera: {
        width: '100%',
        height: '100%'
    }
})
