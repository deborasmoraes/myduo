import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';



export default function Perfil({navigation}){
    const [trueFalse, setTrueFalse] = useState(true)
    const [descricao, setDescricao] = useState("lorem ipsum")


    return(
        <View>
    <Text>Photo</Text>


    <Text>Username</Text>

    {(trueFalse === true)?<Text>{descricao}</Text>:<TextInput
    onChangeText = {setDescricao}
    defaultValue = {descricao}></TextInput>}

    <Text>Descrição</Text>

    <Text>Eu jogo em:</Text>

    {/* adicionar flatlist */}

    <Text>Jogos favoritos</Text>
   
        {(trueFalse === true)?<Text>flatlist aqui</Text>:<TouchableOpacity
        onPress = {() =>{navigation.navigate("Jogos")}}><Text>Editar Jogos</Text></TouchableOpacity>}
    <Text>Horarios disponiveis</Text>
    
<View>
    <Text>inicio</Text>
    <Text>HoraInicio</Text>
</View>

<View>
    <Text>Fim</Text>
    <Text>HoraFim</Text>
</View>
    {(trueFalse === true)? <TouchableOpacity
    onPress = {() =>{setTrueFalse(false)}}
    ><Text>Editar</Text></TouchableOpacity>: <TouchableOpacity
    onPress = {() =>{setTrueFalse(true)}}
    ><Text>Salvar</Text></TouchableOpacity>}
    
        </View>
    )
}