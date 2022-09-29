import { Text, TextInput, TouchableOpacity, View, StyleSheet, Modal } from 'react-native';
import { useEffect, useState, useRef, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Jogos} from './jogo'
import GamesContext from '../contexts/gamesContexts'


export default function Perfil({ navigation }) {
        const [trueFalse, setTrueFalse] = useState(true)
    const [descricao, setDescricao] = useState("lorem ipsum")


const games = useContext(GamesContext)
    return (
        <View>
            
            

            <Text>Username</Text>

            {(trueFalse === true) ? <Text>{descricao}</Text> : <TextInput
                onChangeText={setDescricao}
                defaultValue={descricao}></TextInput>}

            <Text>Descrição</Text>

            <Text>Eu jogo em:</Text>

            {/* adicionar flatlist */}

            <Text>Jogos favoritos</Text>

            {(trueFalse === true) ? <Text>flatlist aqui</Text> : <TouchableOpacity
                onPress={() => { navigation.navigate("Jogos") }}><Text>Editar Jogos</Text></TouchableOpacity>}
            <Text>Horarios disponiveis</Text>

            <View>
                <Text>inicio</Text>
                <Text>HoraInicio</Text>
            </View>

            <View>
                <Text>Fim</Text>
                <Text>HoraFim</Text>
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



const styles = StyleSheet.create({
    camera: {
        width: '100%',
        height: '100%'
    }
})
