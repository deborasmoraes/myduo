import { CheckBox, CheckBoxComponent } from '@react-native-community/checkbox';
import { StatusBar } from 'expo-status-bar';
import { TextInputMask } from 'react-native-masked-text'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TouchableNativeFeedbackComponent } from 'react-native';
import { useEffect, useState } from 'react';
export default function PageRegistrar({ navigation }) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [idade, setIdade] = useState('')
    const [msg, setMsg] = useState('')
    // const save = () => {
    //     fetch('http://localhost:8080/usuarios', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json', 'content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             nome: nome,
    //             email: email,
    //             senha: senha,
    //             datanasc: idade

    //         })
    //     }
    //     ).then(() => { setMsg("deu certo carai") })
    // }


    // const exist = () => {

    //     useEffect(() => {
    //         fetch(`http://localhost:8080/usuarios/${email}`)
    //         .then(data => data.json())
    //                 .then(result => { console.log(result.nome)})
    //     })
    // }

    return (
        <View>
            <Text>Registre</Text>

            <Text>Nome:</Text>
            <TextInput
                onChangeText={setNome}
                value={nome}
                placeholder='insira seu nome completo' />


            <Text>Email</Text>
            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder='insira seu email' />

            <Text>Senha</Text>
            <TextInput
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={true}
                placeholder='insira sua senha' />

            <Text>Ano de Nascimento</Text>
            <TextInputMask
                type='datetime'
                options={{ format: 'DD/MM/YYYY' }

                }
                onChangeText={setIdade}
                value={idade}
                placeholder='Insira sua data de nascimento' />

            <TouchableOpacity
                onPress={save}
            ><Text>Registre-se</Text></TouchableOpacity>
            <Text>{msg}</Text>

        </View>
    )
}




