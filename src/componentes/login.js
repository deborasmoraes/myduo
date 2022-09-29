
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'

export default function PageLogin({ navigation }) {

    return (
        <LinearGradient
            style={styles.gradient}
            colors={['#C2CBFB', '#FFFF']}
            start={{ x: 90, y: 40 }}
            end={{ x: 5, y: 80 }}
        >
            <View>
                <ImageBackground
                    source={require('../../assets/minicial.png')}
                    style={styles.m}>
                    <Animatable.Image
                        animation="fadeInUp"
                        delay={400}
                        source={require('../../assets/myduo.png')}
                        style={styles.logo}
                    >
                    </Animatable.Image>
                    <Animatable.View
                        animation="fadeInLeft"
                        delay={800}>
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
                    <Animatable.View
                    animation="fadeInUp"
                    delay={800}>
                        <TouchableOpacity
                            style={styles.botao1}
                            onPress={() => navigation.navigate('Principal', { nome: 'Principal' })}
                        >
                            <Text style={{ color: '#FFFF', alignSelf: 'center' }}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.botao2}
                            onPress={() => navigation.navigate('Redefinir', { nome: 'Redefinir' })}
                        >
                            <Text>Esqueci a senha</Text>
                        </TouchableOpacity>
                        <View style={styles.container}>
                            <Text style={{ textAlign: 'center', marginTop: '5%' }}>Ou continue com</Text>
                            <TouchableOpacity style={styles.botao3}><Text style={{ color: '#FFF' }}>Google</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.botao3}><Text style={{ color: '#FFF' }}>Facebook</Text></TouchableOpacity>

                            <Text style={styles.container2}>Não possui conta?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Registrar', { nome: 'Registrar' })}><Text>Criar agora</Text></TouchableOpacity>
                        </View>
                    </Animatable.View>
                </ImageBackground>


            </View>

        </LinearGradient>
    )


}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    m: {
        width: '100%',
        height: '69%',
        shadowOffset: { width: 0.1, height: 0.2 },
        shadowColor: '#385672'
    },
    logo: {
        alignSelf: 'center',
        width: '11%',
        height: '10%',
        padding: '4%',
        marginTop: '17%'
    },
    login: {
        fontSize: 35,
        justifyContent: 'flex-end',
        alignSelf: 'center',
        marginTop: '36%',
        marginBottom: '9%',
        fontWeight: 'bold'
    },
    input1: {
        width: '80%',
        marginTop: '3%',

    },
    input2: {
        borderBottomColor: '00182F',
        borderBottomWidth: 1,
        width: '80%',
        alignSelf: 'center',
        padding: '0.5%'
    },
    botao1: {
        backgroundColor: '#00182F',
        borderRadius: 20,
        width: '65%',
        height: '10%',
        alignSelf: 'center',
        padding: '3%',
        justifyContent: 'flex-start',
        marginTop: '9%'
    },
    botao2: {
        color: 'rgba(0, 24, 47, 0.82)',
        alignSelf: 'center',
        marginTop: '4%'
    },
    botao3: {
        backgroundColor: '#00182F',
        borderRadius: 20,
        width: '40%',
        height: '14.5%',
        marginTop: '3%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        textAlign: 'center',
        marginTop: '14%'

    },
    gradient: {
        height: '100%',
        width: '100%'
    }


})
