import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Amigos(){
    return(
        <View style={styles.container}>
        <Text style={ styles.text}>Ainda não fez nenhum amigo :c</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffe4e1',
      width: '100%',
      height: '100%',
    },
    text:{
     marginTop: '4%'
    }
  });
  