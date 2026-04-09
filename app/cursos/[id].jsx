import { cursos } from "../../lib/cursos"
import { router } from "expo-router"
import { contas } from "../../lib/contas"
import { useLocalSearchParams } from "expo-router"

import { View, TouchableOpacity, StyleSheet, Image, Text, ImageBackground } from "react-native"


export default function Cursos(){

    const { id } = useLocalSearchParams();
    
    const curso = cursos.find(curso => curso.id === Number(id))
    
    return(
        <View>
            <Image
            source={{uri: curso.logo }}
            style={{width: "100%", height: 200}}
            />
            
            <Text style={styles.titulo}>{curso.nome}</Text>
            
            <Text style={styles.subtitulo}>Sobre o curso:</Text>
            <Text style={styles.texto}>{curso.descricao}</Text>

            <Text style={styles.subtitulo}>Requisitos:</Text>
           
              

     
           

            <TouchableOpacity style={styles.botao} onPress={() => router.push(`../`)}>
                <Text>Return</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        width: 90,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginLeft: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
    },
    titulo:{
        fontSize: 20,
        fontWeight: "600",
        padding: 6,
    },
    subtitulo:{
        marginTop: 7,
        fontSize: 17,
        fontWeight: "600",
        padding: 6,
    },
    texto: {
        padding: 6,
        fontSize: 16,
    }
})
