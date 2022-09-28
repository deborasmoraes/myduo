
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'


export default function Init({ navigation }) {
  return (
    
     <LinearGradient
     style={styles.gradient}
        colors={['#FFFFFF', '#899AF7']}
        start={{ x: 30, y: 20 }}
        end={{ x: 60, y: 40 }}
         > 
   
      <View  style={styles.myduo}>
        <Animatable.View
        animation="fadeInDown" 
        delay={600}>
        <Image 
          source={require('../../assets/myduo.png')}
          style={styles.img}
        ></Image>
        <Text style={styles.corTextoMD}>Myduo</Text>
        </Animatable.View>
      </View>
      
      <Animatable.View
      animation="fadeInUp"
      delay={800}>
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
      </Animatable.View>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
   
  },
  myduo: {
    backgroundColor: '#00182F',
    height: '68%',
    width: '100%',
    border: '#1976D2',
    borderWidth: 1,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: 'center'
  },
  botaoLogin:{
    backgroundColor: '#00182F',
    borderRadius: 20,
    color: '#FFFF',
    width: '40%',
    height: '7%',
    padding: '5%',
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: '15%'
  },
  botaoRegistrar:{
    color: '00182F',
    alignSelf: 'center',
    marginTop: '5%'
  },
  corTexto:{
    color: "#FFF"
  },
  corTextoMD:{
    color: "#FFF",
    textAlign: 'center',
    alignItems: 'center',

  },
  gradient:{
    width: '100%',
    height: '100%'
  },
  img:{
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: '35%'
  }
})


