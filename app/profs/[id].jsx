import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native"
import { cursos } from "../../lib/cursos"
import { router } from "expo-router"
import { contas } from "../../lib/contas"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams } from "expo-router"

export default function Prof(){

    const { id } = useLocalSearchParams();
    const prof = cursos.find(prof => prof.id === Number(id))

    
   const image = require('../../assets/images/fundoDados.jpg')

    return(
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
             <TouchableOpacity style={styles.botao}  onPress={() => router.push(`../`)}>
               <Ionicons name="return-down-back" size={30} color="black" />
           </TouchableOpacity>
            <View style={styles.container}>
               <View style={styles.card1}>
                <View style={{marginBottom: "15", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 10, marginLeft: 10, marginTop: 10}}> 
              
                <Image
                  source={{uri: prof.fotoProfessor}}
                  style={{height: 60, width: 60, borderRadius: 50, borderWidth: 1}}
               />
                 <Text style={{fontWeight: "800", color: "white"}}>PROFESSOR</Text>
               </View>
               <View style={{flexDirection: ""}}>
                  <Text style={styles.texto1}>Nome:</Text>
                  <Text style={styles.texto}>{prof.professor}</Text>
               </View>

              <View style={{flexDirection: ""}}>
                <Text style={styles.texto1}>Graduação:</Text>
                <Text style={styles.texto}>{prof.graduacaoProfessor}</Text>
              </View>

              <View style={{flexDirection: ""}}>
                <Text style={styles.texto1}>Escola:</Text>
                <Text style={styles.texto}>{prof.escolaProfessor}</Text>
              </View>

              <View style={{flexDirection: ""}}>
                <Text style={styles.texto1}>Curso:</Text>
                <Text style={styles.texto}>{prof.cursosProfesssor}</Text>
              </View>
            </View>
            </View>   
            
        </View>
       </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
    },
    botao: {
        width: 60,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginLeft: 12,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: "white",
        marginBottom: "20"

    },
    card1: {
        backgroundColor: '#2b47d2',
        borderRadius: 30,
        height: 390,
        width: "95%",
        borderWidth: 1,
    },
    texto1: {
         color: "white",
        marginLeft: 10,
        fontWeight: "600",
        marginTop: 4,
    },
    texto: {
        color: "white",
        marginLeft: 6,
        marginTop: 4,
        fontSize: 13,
        
    },
    image: {
    flex: 1,
    
  },
})