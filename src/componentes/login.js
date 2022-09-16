
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function PageLogin({ navigation }) {

    return (
        <LinearGradient
            style={styles.gradient}
            colors={['rgba(255, 255, 255, 0.51)', 'rgba(106, 126, 229, 0.39)']}
            start={{ x: 4, y: 30 }}
            end={{ x: 4, y: 50 }}
        >
            <View>
                <View>
                    <ImageBackground
                        source={require('../../assets/minicial.png')}
                        style={{ width: 360, height: 255, opacity: '90%'}} >
                        <Image
                            source={require('../../assets/myduo.png')}
                            style={{ width: 40, height: 40, margin: 'auto' }}
                        >

                        </Image>
                    </ImageBackground>

                </View>

                <View style={styles.container}>
                    <Text style={styles.login}>Login</Text>
                </View>
                <View>
                    <Text style={styles.input1}>Email</Text>
                    <TextInput
                        style={styles.input2}
                    />

                    <Text style={styles.input1}>Senha</Text>
                    <TextInput style={styles.input2}
                    />
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.botao1}
                        onPress={() => navigation.navigate('Principal', { nome: 'Principal' })}
                    ><Text style={{color: '#FFF'}}>Entrar</Text>

                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                    style={styles.botao2}
                        onPress={() => navigation.navigate('Redefinir', { nome: 'Redefinir' })}
                    ><Text>Esqueci a senha</Text></TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Text style={{textAlign:'center', marginTop: '10%'}}>Ou continue com</Text>
                    <TouchableOpacity style={styles.botao3}><Text>Google</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botao3}><Text>Facebook</Text></TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <Text>Não possui conta?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registrar', { nome: 'Registrar' })}><Text style={{fontWeight: 600}}>Criar agora</Text></TouchableOpacity>
                </View>

            </View>
        </LinearGradient>
    )


}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10
    },
    m: {
        width: '100%',
        height: '370%',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#385672'
    },
    logo: {
        alignSelf: 'center',
        width: '9%',
        height: '50%'
    },
    login: {
        fontWeight: 700,
        fontSize: 20,
        marginBottom: 5
    },
    input1: {
        width: '80%',
        margin: 'auto',
        marginTop: '5%'
    },
    input2: {
        borderBottomColor: '00182F',
        borderBottomWidth: 1,
        width: '80%',
        alignSelf: 'center',
    },
    botao1: {
        backgroundColor: 'rgba(0, 24, 47, 0.82)',
        borderRadius: 20,
        textDecorationStyle: '#FFFF',
        opacity: '90%',
        width: '40%',
        padding: '1.5%',
        height: '40%',
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: '15%'
    },
    botao2:{
        color: 'rgba(0, 24, 47, 0.82)',
        alignSelf: 'center',
        marginTop: '5%'
      },
      botao3:{
        backgroundColor: 'rgba(0, 24, 47, 0.82)',
        borderRadius: 20,
        opacity: '90%',
        width: '40%',
        height: '30%',
        marginTop: '3%',
        textAlign: 'center',
        color: '#FFF'
      },
      container2:{
          textAlign: 'center',
          marginTop: '11%'

      },
      gradient:{
          height: '100%'
      }


})
