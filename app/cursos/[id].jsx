import { cursos } from "../../lib/cursos"
import { router } from "expo-router"
import { contas } from "../../lib/contas"
import { useLocalSearchParams } from "expo-router"

import { View, TouchableOpacity, StyleSheet, Image, Text, ScrollView, ImageBackground } from "react-native"


export default function Cursos(){

    const { id } = useLocalSearchParams();
    
    const curso = cursos.find(curso => curso.id === Number(id))

    const image = require('../../assets/images/fundo2.jpg')
    
    return(
         //<ImageBackground source={image} resizeMode="cover" style={styles.image}> 
        <ScrollView> 
        <View>
            <Image
            source={{uri: curso.logo }}
            style={{width: "100%", height: 200}}
            />
            
            <Text style={styles.titulo}>{curso.nome}</Text>
            
            <Text style={styles.subtitulo}>Sobre o curso:</Text>
            <Text style={styles.texto}>{curso.descricao}</Text>

            <Text style={styles.subtitulo}>Requisitos:</Text>
            <Text style={styles.texto}>{curso.requisitos}</Text>

            <Text style={styles.subtitulo}>Instrutor:</Text> 
            <View style={{flexDirection: "row", alignItems: "center", gap: 14}}>  
            <Image
             source={{uri: curso.fotoProfessor}}
             style={{width: 60, height: 60, borderRadius: 40, marginLeft: 10}}
            />
            <Text>{curso.professor}</Text>
            </View> 

            <Text style={styles.subtitulo}>Informações:</Text>
            <View style={styles.card}>
                <Text style={styles.texto}>Duração: {curso.duracao}</Text>
                <Text style={styles.texto}>Carga Horária: {curso.cargaHoraria}</Text>
                <Text style={styles.texto}>Início: {curso.dataInicio}</Text>
                <Text style={styles.texto}>Término: {curso.dataTermino}</Text>
                <Text style={styles.texto}>Local: {curso.local}</Text>
            </View>
           

            <TouchableOpacity style={styles.botao} onPress={() => router.push(`../`)}>
                <Text>Return</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
          //  </ImageBackground>
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
    },
    card: {
        backgroundColor: "white",
        borderRadius: 30,
        borderWidth: 2,
        height: 200,
        paddingLeft: 7,
        justifyContent: "center"
    }
})
