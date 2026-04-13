import { View, StyleSheet, TextInput, ScrollView, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { playists } from "../../lib/videos"
import { cursos } from "../../lib/cursos"
import { router } from "expo-router"
import { useState } from "react"

export default function TabTwoScreen() { 

  const image = require('../../assets/images/fundo.jpg')

  const [p, setP] = useState(playists)
  const [busca, setBusca] = useState(``)

   const playistsFiltered = p
    .filter((playist) => playist.nomePLayist.toLowerCase().includes(busca.toLowerCase()))

  return (
     <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
     <View style={styles.Container}>

       <TextInput
          style={styles.Input}
          placeholder="Informe o assunto"
          value={busca}
          onChangeText={setBusca}
        />

        <Text style={styles.texto}>Videos</Text>

       
       <ScrollView style={{backgroundColor: "white", height: 200}} horizontal showsHorizontalScrollIndicator={false}>

       <View style={{borderRadius: 20, flexDirection: "row",backgroundColor: "gray", height: 260}}> 

        {playistsFiltered.map((playist, index) => (

            <TouchableOpacity key={playist.id + index} style={styles.card} onPress={() => router.push(`/videos/${playist.id}`)}>  
               <Image
                  source={{uri: playist.fotoCapa}}
                  style={{height: "100%", width: "100%", borderRadius: 19}}
               />
               <Text style={{color: "white", fontWeight: "700", fontSize: 16, marginTop: 9}}>{playist.nomePLayist}</Text>
            </TouchableOpacity>
        ))}

        </View>

        </ScrollView> 



        {/* <Text style={styles.texto}>Cursos</Text>

        <ScrollView style={{backgroundColor: "white"}} horizontal showsHorizontalScrollIndicator={false}>
        <View style={{borderRadius: 20, flexDirection: "row", backgroundColor: "gray", height: 220, alignItems: "center"}}> 
        {videos.map((video, index) => (
            <TouchableOpacity key={video.titulo + index} style={styles.card}>
                  
            </TouchableOpacity>
        ))}
        </View>
        </ScrollView>  */}
        

     </View>
     </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white"
  },
  Input: {
    backgroundColor: "white",
    color: "black",
    height: 45,
    marginHorizontal: 30,
    marginTop: 100,  //138
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    paddingLeft: 15,
  },
  texto: {
    marginTop: 32,
    marginLeft: 30,
    fontWeight: "700",
    fontSize: 20,
  },
  card: {
    backgroundolor: "white",
    height:190,
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: 6,
    marginTop: 10,
    

  },
   image: {
    flex: 1,
    justifyContent: 'center', 
  },
});