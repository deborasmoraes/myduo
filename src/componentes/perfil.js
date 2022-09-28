import { Text, TextInput, TouchableOpacity, View, StyleSheet, Modal } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera'

import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'


export default function Perfil({ navigation }) {
    const [trueFalse, setTrueFalse] = useState(true)
    const [descricao, setDescricao] = useState("lorem ipsum")
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [hasPermission, setHasPermission] = useState(null)
    const [foto, setFoto] = useState(null)
    const camRef = useRef(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === "granted");
        })();
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            setHasPermission(status === "granted");
        })();

    }, [])

    if (hasPermission === false) {
        return <Text>Sem permissão de acesso</Text>
    }

    async function tirarFoto() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync()
            setFoto(data.uri);
            setOpen(true)
        }
    }
    async function salvarFoto() {
        const asset = await MediaLibrary.createAssetAsync(foto)
            .then(() => {
                alert('Salvo com sucesso')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <View>
            <View>
                <Text>Photo</Text>
                <Camera
                    style={styles.camera}
                    type={type}
                    ref={camRef}>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}><Text>Alternar Câmera</Text></TouchableOpacity>
                        <TouchableOpacity
                            onPress={tirarFoto}><Text>Alternar Câmera</Text></TouchableOpacity>
                    </View>
                </Camera>
                {foto && (
                    <Modal animationType="slide" transparent={false} visible={open}>
                        <View>
                            <View style={{ margin: 10, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={{ margin: 10, backgroundColor: 'red' }}
                                    onPress={() => setOpen(false)}
                                >
                                    {/* <FontAwesome name="window-close" size={50} color="#fff"></FontAwesome> */}
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ margin: 10 }}
                                    onPress={salvarFoto}
                                >
                                    {/* <FontAwesome name="upload" size={50} color="#121212"></FontAwesome> */}
                                </TouchableOpacity>
                            </View>
                            <Image style={styles.image} source={{ uri: foto }} />
                        </View>
                    </Modal>
                )}
            </View>

            <Text>Username</Text>

            {(trueFalse === true) ? <Text>{descricao}</Text> : <TextInput
                onChangeText={setDescricao}
                defaultValue={descricao}></TextInput>}

            <Text>Descrição</Text>

            <Text>Eu jogo em:</Text>

            {/* adicionar flatlist */}

            <Text>Jogos favoritos</Text>

            {(trueFalse === true) ? <Text>flatlist aqui</Text> : <TouchableOpacity
                onPress={() => { navigation.navigate("Jogos") }}><Text>Editar Jogos</Text></TouchableOpacity>}
            <Text>Horarios disponiveis</Text>

            <View>
                <Text>inicio</Text>
                <Text>HoraInicio</Text>
            </View>

            <View>
                <Text>Fim</Text>
                <Text>HoraFim</Text>
            </View>
            {(trueFalse === true) ? <TouchableOpacity
                onPress={() => { setTrueFalse(false) }}
            ><Text>Editar</Text></TouchableOpacity> : <TouchableOpacity
                onPress={() => { setTrueFalse(true) }}
            ><Text>Salvar</Text></TouchableOpacity>}

        </View>
    )
}

const styles = StyleSheet.create({
    camera: {
        width: '100%',
        height: '100%'
    }
})
