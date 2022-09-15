import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

export default function RedefinirSenha(){
    return(
        <View>
            <Text>Esqueceu a senha?</Text>
            <Text>Redefina a senha em duas etapas</Text>
            <TextInput placeholder='Insira seu e-mail'></TextInput>
        </View>
    )
}