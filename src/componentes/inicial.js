
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Init({ navigation }) {
  return (
    <View>
      <View style={styles.myduo}>
        <Image 
          source={require('../../assets/myduo.png')}
          style={styles.img}
        ></Image>
        <Text style={styles.corTextoMD}>MyDuo</Text>
      </View>
      <LinearGradient
      style={styles.gradient}
        colors={['rgba(255, 255, 255, 0.51)', 'rgba(106, 126, 229, 0.39)']}
        start={{ x: 4, y: 30 }}
        end={{ x: 4, y: 50 }}
         >
        <TouchableOpacity
        style={styles.botaoLogin}
          onPress={() => {
            navigation.navigate('Login', { nome: 'Login' })
          }}

        ><Text style={styles.corTexto}>Acesse sua conta</Text></TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoRegistrar}
          onPress={() => {
            navigation.navigate('Registrar', { nome: 'Registrar' })
          }}
        ><Text>Registre-se!</Text></TouchableOpacity>
      </LinearGradient>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  myduo: {
    backgroundColor: 'rgba(0, 24, 47, 0.9)',
    height: 550,
    border: '#1976D2',
    borderWidth: 1,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: 'center'
  },
  botaoLogin:{
    backgroundColor: 'rgba(0, 24, 47, 0.82)',
    borderRadius: 20,
    color: '#FFFF',
    opacity: '90%',
    width: '40%',
    height: '20%',
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: '15%'
  },
  botaoRegistrar:{
    color: 'rgba(0, 24, 47, 0.82)',
    alignSelf: 'center',
    marginTop: '5%'
  },
  corTexto:{
    color: "#FFF"
  },
  corTextoMD:{
    color: "#FFF",
    textAlign: 'center',
    alignItems: 'center'
  },
  gradient:{
    height: '28.2%'
  },
  img:{
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: '35%'
  }
})


