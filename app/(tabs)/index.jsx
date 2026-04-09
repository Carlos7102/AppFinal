import {StyleSheet, View, Text, Image, TextInput, ScrollView, Touchable, TouchableOpacity,  ImageBackground } from 'react-native';
import { cursos } from "../../lib/cursos"
import { router } from "expo-router"
import { contas } from "../../lib/contas"
 
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react"

export default function HomeScreen() {

  const [c, setC] = useState(cursos)
  const [busca, setBusca] = useState(``)


  const [tipo, setTipo] = useState(`Ambos`)

  const tipos = ["Ambos", "Presencial", "Online"]

  const cursosFiltered = c
    .filter((curso) => curso.nome.toLowerCase().includes(busca.toLowerCase()))
    .filter((curso) => tipo === "Ambos" || curso.tipos.some(( g ) => g.texto === tipo))

  const image = require('../../assets/images/fundo.jpg')
  
  return (
     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.Container}>

      <View style={{ width: "100%", height: 90, marginTop: 28}}>
        
          <TouchableOpacity style={{width: 0, height: 0}} onPress={() => router.push(`/contas/0`)}>
            {contas.map((contas, index ) => (                 

            <Image
            key={contas.nome + index}
             source={{uri: contas.imagem}}
             style={{width: 60, height: 60, borderRadius: 40, marginTop: 15, marginLeft: 290, borderWidth: 2}}
            />
            ))}
           
          </TouchableOpacity>
      </View>

      <TextInput
        style={styles.Input}
        placeholder="Informe o curso"
        value={busca}
        onChangeText={setBusca}
      />

      <View style={{flexDirection: "row", marginVertical: 30, height: 45, justifyContent: "space-evenly"}}>

         {tipos.map((valor, index) => (
            <TouchableOpacity
              style={styles.botao2}
              key={valor+index}
              onPress={() => setTipo(valor)}
            >
            <Text style={{ color: tipo === valor ? "#9fff92" : "white", fontWeight: "700"}}>{tipos[index]}</Text>

            </TouchableOpacity>
         ))}

      </View>
           
      <ScrollView style={styles.scroll}> 
        {cursosFiltered.map((curso, index) => (
          <TouchableOpacity  key={curso.nome + index} style={styles.botao} onPress={() => router.push(`/cursos/0`)}>
           
            <Text style={{fontSize: 19, fontWeight: "600", marginTop: 5}}>{curso.nome}</Text>
            
            <View style={{flexDirection: "row"}}>

              <View style={styles.cardBotao}>
                <View style={{flexDirection: "row", gap: 7}}> 
                  <Entypo name="calendar" size={17} color="black" />
                  <Text style={styles.textoBt}>Duraçâo: {curso.duracao}</Text>
                </View>
              </View>
          
              <View style={styles.cardBotao}> 
                <View style={{flexDirection: "row", gap: 7}}> 
                 <FontAwesome6 name="clock" size={17} color="black" />
                <Text style={styles.textoBt}>Carga H.: {curso.cargaHoraria}</Text>
                </View>
              </View>

            </View>  

          <View style={{flexDirection: "row"}}>
            <View style={styles.cardBotao}> 
            <View style={{flexDirection: "row", gap: 7}}>    
            <Feather name="map-pin" size={17} color="black" />
            <Text style={styles.textoBt}>Local: {curso.local}</Text>
            </View>
           </View>
 
          </View>

          </TouchableOpacity>
        ))}
      </ScrollView>

     
    </View>
     </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1, 

  },
  ImagemLogo: {
    width: 200, 
    height: 200,
  },
  Input: {
    backgroundColor: "white",
    color: "black",
    height: 45,
    marginHorizontal: 30,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    paddingLeft: 15,
  },
  scroll: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 10,
  },
  botao: {
    flexDirection: "column",
    backgroundColor: "white",
    width: "100%",
    height: 250,
    borderRadius: 20,
    marginVertical: 10,
    paddingLeft: 10,
    paddingTop: 10,
    borderWidth: 2,
  }, 
  cardBotao: {
    width: 140,
    height: 50, 
    borderRadius: 30, 
    alignItems: "center", 
    justifyContent: "center", 
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 5,
  },
  textoBt: {
    fontSize: 13,
    marginVertical: 1,
    fontWeight: "400"
  },
  botao2:{
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 110,
  },

    image: {
    flex: 1,
    justifyContent: 'center', // Centraliza o conteúdo filho
  },
})
