
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function PageRegistrar({ navigation }) {
    return (
        <View>
            <Text>Registre</Text>

            <Text>Nome:</Text>
            <TextInput
                placeholder='nome' />

            <Text>Email:</Text>
            <TextInput
                placeholder='email' />

            <Text>Senha:</Text>
            <TextInput
                placeholder='senha' />

            <Text>Ano de Nascimento:</Text>
            <TextInput
                placeholder='Data' />

            <TouchableOpacity
                onPress={() => navigation.navigate('Login', { nome: 'Login' })}
            ><Text>Cadastrar</Text></TouchableOpacity>

        </View>
    )
}


