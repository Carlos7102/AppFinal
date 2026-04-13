import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import { router } from "expo-router"
import { useState } from "react"

export default function SignIn(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    return(
        <View style={styles.container}>
            <Image
              source={{uri: '../../assets/images/logo.jpg'}}
              style={{height: 150, width: 150, borderRadius: 100, marginTop: 100, marginBottom: 50}}
            />
            <TextInput
              style={styles.input}
              value={email}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              value={senha}
              placeholder="Senha"
            />

            <TouchableOpacity style={styles.botao} onPress={() => router.push(`/home`)}>
                <Text style={styles.textobt}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
       
    },
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        marginTop: 15,
        width: "75%",
        height: 47,
        borderRadius: 10,
        paddingLeft: 10,
    },
    botao: {
       backgroundColor: "black",
       width: 100,
       height: 50,
       marginTop: 25,
       borderRadius: 10,
       justifyContent: "center",
       alignItems: "center",
    },
    textobt: {
    color: "white",
    fontWeight: "700",
    }
})
