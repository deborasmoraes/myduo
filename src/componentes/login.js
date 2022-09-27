
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'


export default function PageLogin({ navigation }) {

    return (
        <LinearGradient
            style={styles.gradient}
            colors={['#FFFFFF', '#C2CBFB']}
            start={{ x: 60, y: 40 }}
            end={{ x: 30, y: 4 }}
        >
            <View>
                <ImageBackground
                    source={require('../../assets/minicial.png')}
                    style={styles.m}>
                    <Image
                        source={require('../../assets/myduo.png')}
                        style={styles.logo}
                    >
                    </Image>
                    <Animatable.View
                        animation="fadeInUp"
                        delay='800'>
                        <Text style={styles.login}>Login</Text>

                        <View style={styles.container}>
                            <Text style={styles.input1}>Email</Text>
                            <TextInput
                                style={styles.input2}
                            />

                            <Text style={styles.input1}>Senha</Text>
                            <TextInput style={styles.input2}
                            />
                        </View>
                    </Animatable.View>
                </ImageBackground>

                <View>
                    <TouchableOpacity
                        style={styles.botao1}
                        onPress={() => navigation.navigate('Principal', { nome: 'Principal' })}
                    ><Text style={{ color: '#FFF' }}>Entrar</Text> </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.botao2}
                            onPress={() => navigation.navigate('Redefinir', { nome: 'Redefinir' })}
                        ><Text>Esqueci a senha</Text></TouchableOpacity>

                   
                </View>


                <View style={styles.container}>
                    <Text style={{ textAlign: 'center', marginTop: '5%' }}>Ou continue com</Text>
                    <TouchableOpacity style={styles.botao3}><Text style={{ color: '#FFF' }}>Google</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botao3}><Text style={{ color: '#FFF' }}>Facebook</Text></TouchableOpacity>

                    <Text style={{ textAlign: 'center', marginTop: '3.2%' }}>Não possui conta?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registrar', { nome: 'Registrar' })}><Text>Criar agora</Text></TouchableOpacity>
                </View>

            </View>
        </LinearGradient>
    )


}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '13%'
    },
    m: {
        width: '100%',
        height: '64%',
        shadowOffset: { width: 0.1, height: 0.2 },
        shadowColor: '#385672'
    },
    logo: {
        alignSelf: 'center',
        width: '9.7%',
        height: '7%',
        marginTop: '15%'
    },
    login: {
        fontSize: 20,
        justifyContent: 'flex-end',
        alignSelf: 'center',
        marginTop: '35%',
    },
    input1: {
        width: '80%',
        marginTop: '2%',

    },
    input2: {
        borderBottomColor: '00182F',
        borderBottomWidth: 1,
        width: '80%',
        alignSelf: 'center',
        padding: '2%'
    },
    botao1: {
        backgroundColor: '#00182F',
        borderRadius: 20,
        textDecorationStyle: '#FFFF',
        opacity: '90%',
        width: '40%',
        padding: '4.8%',
        height: '40%',
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: '2.5%'
    },
    botao2: {
        color: 'rgba(0, 24, 47, 0.82)',
        alignSelf: 'center',
        marginTop: '2%'
    },
    botao3: {
        backgroundColor: '#00182F',
        borderRadius: 20,
        opacity: '90%',
        width: '40%',
        height: '30%',
        marginTop: '3%',
        textAlign: 'center',
        justifyContent: 'center'
    },
    container2: {
        textAlign: 'center',
        marginTop: '11%'

    },
    gradient: {
        height: '100%',
        width: '100%'
    }


})
