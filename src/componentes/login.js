
    import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

    export default function PageLogin({navigation}){

    return(
    <View>
        <Text>MyDuo</Text>
        <Text>Login</Text>

        <Text>Email</Text>
        <TextInput
        placeholder='Insira o email'
        />

        <Text>Senha</Text>
        <TextInput
        placeholder='Insira a senha'/>

        <TouchableOpacity
        onPress={() => navigation.navigate('Principal', {nome: 'Principal'})}
        ><Text>Entrar</Text>

        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Redefinir', {nome:'Redefinir'})}
        ><Text>Esqueci a senha</Text></TouchableOpacity>
        
        
 
            <Text>Não possui conta?</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('Registrar', {nome:'Registrar'})}><Text>Criar conta</Text></TouchableOpacity>
    

        </View>
    )


}

const styles = StyleSheet.create({

    container:{ backgroundColor: 'black'}
})