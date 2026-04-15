import { cursos } from "../../lib/cursos"
import { router } from "expo-router"
import { contas } from "../../lib/contas"
import { useLocalSearchParams } from "expo-router"

import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { View, TouchableOpacity, StyleSheet, Image, Text, ScrollView, ImageBackground } from "react-native"


export default function Cursos(){

    const { id } = useLocalSearchParams();
    
    const curso = cursos.find(curso => curso.id === Number(id))

    const image = require('../../assets/images/fundo2.jpg')
    
    return(
         //<ImageBackground source={image} resizeMode="cover" style={styles.image}> 
        <ScrollView style={{backgroundColor: "#f5f5f5"}}> 
        
           <View>
            <TouchableOpacity style={styles.botao}  onPress={() => router.push(`/home`)}>
               <Ionicons name="return-down-back" size={30} color="black" />
           </TouchableOpacity> 
            {/* <Image
            source={{uri: curso.logo }}
            style={{width: "100%", height: 200}}
            />  */}
             
             <View style={{backgroundColor: "black", width: "100%", height: 1}}></View>
           
            <Text style={styles.titulo}>{curso.nome}</Text>
            
            <Text style={styles.subtitulo}>- Sobre o curso:</Text>
            <Text style={styles.texto}>{curso.descricao}</Text>

            <Text style={styles.subtitulo}>- Requisitos:</Text>
            <Text style={styles.texto}>{curso.requisitos}</Text>

            <Text style={styles.subtitulo}>- Instrutor:</Text> 
            <View style={{flexDirection: "row", alignItems: "center", gap: 14}}>  

            <TouchableOpacity  onPress={() => router.push(`/profs/${curso.id}`)}>
            <Image
             source={{uri: curso.fotoProfessor}}
             style={{width: 60, height: 60, borderRadius: 40, marginLeft: 10, borderWidth: 1}}
            />
            </TouchableOpacity>    
           
            <Text style={{fontSize: 14}}>{curso.professor}</Text>
            </View> 

            <Text style={styles.subtitulo}>- Informações:</Text>
            <View style={{alignItems: "center"}}>
            <View style={styles.card}>

               <View style={{flexDirection: "row"}}> 
                <Entypo name="calendar" size={17} color="black" />
                <Text style={styles.texto1}> Duração: </Text>
                </View>
                <Text style={styles.texto2}> {curso.duracao}</Text>
             
             <View style={{flexDirection: "row"}}> 
                <FontAwesome6 name="clock" size={17} color="black" />
                <Text style={styles.texto1}> Carga Horária: </Text>
                </View>
                <Text style={styles.texto2}> {curso.cargaHoraria}</Text>
           
                <View style={{flexDirection: "row"}}>
                <FontAwesome5 name="calendar-day" size={17} color="black" />
                <Text style={styles.texto1}> Início: </Text>
                </View>
                <Text style={styles.texto2}> {curso.dataInicio}</Text>

                 <View style={{flexDirection: "row"}}>
                <FontAwesome5 name="calendar-day" size={17} color="black" />
                <Text style={styles.texto1}> Término: </Text>
                   </View>
                <Text style={styles.texto2}> {curso.dataTermino}</Text>


                <View style={{flexDirection: "row"}}> 
                 <Feather name="map-pin" size={17} color="black" />
                <Text style={styles.texto1}> local: </Text>
                </View>
                <Text style={styles.texto2}> {curso.localEspc}</Text>

            </View>
            </View>
            <View style={{alignItems: "center"}}>
               <TouchableOpacity style={styles.bt}>
                <Text style={{fontWeight: "700", color: "white"}}>Participar</Text>
            </TouchableOpacity>
            </View>
            
           
          
        </View>

        </ScrollView>
       
          // </ImageBackground>
    )
}

const styles = StyleSheet.create({
   botao: {
        width: 60,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 12,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: "white",
        marginBottom: "20"

    },
    titulo:{
        fontSize: 20,
        fontWeight: "600",
        padding: 6,
        //color: "white",
    },
    subtitulo:{
        marginTop: 7,
        fontSize: 17,
        fontWeight: "600",
        padding: 6,
        //color: "white",
    },
    texto: {
        padding: 6,
        fontSize: 16,
        //color: "white",
    },
    card: {
        backgroundColor: "white",
        borderRadius: 30,
        borderWidth: 1,
        height: 300,
        paddingLeft: 10,
        justifyContent: "center",
        marginBottom: 30,
        width: "95%"
    },
     texto1: {
        fontWeight: "700",
        fontSize: 15,
        marginBottom: 2,
    },
     texto2: {
    
    },
    bt: {
        backgroundColor: "black",
        marginBottom: 40,
        width: 80,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    }
})