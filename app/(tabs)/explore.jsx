import { View, StyleSheet, TextInput, ScrollView, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { playlists } from "../../lib/playlists"
import { cursos } from "../../lib/cursos"
import { router } from "expo-router"
import { useState } from "react"

export default function TabTwoScreen() { 

  const image = require('../../assets/images/fundo.jpg')

  const [p, setP] = useState(playlists)
  const [busca, setBusca] = useState(``)

   const playlistsFiltered = p
    .filter((playlist) => playlist.nomePLaylist.toLowerCase().includes(busca.toLowerCase()))

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    
     <View style={styles.Container}>

       <TextInput
          style={styles.Input}
          placeholder="Informe o assunto"
          value={busca}
          onChangeText={setBusca}
        />

         <View style={{ marginLeft: 22, borderWidth: 1, backgroundColor: "#fffcfc", width: 100, height: 35, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 40, marginBottom: 20}}>
            <Text style={styles.texto}>Playlists</Text>
         </View> 
        

       
       <ScrollView style={{height: 200}} horizontal showsHorizontalScrollIndicator={false}>

       <View style={{borderRadius: 20, flexDirection: "row",backgroundColor: "#ffffff", height: 260, marginLeft: 22}}> 
 
        {playlistsFiltered.map((playlist, index) => (

            <TouchableOpacity key={playlist.id + index} style={styles.card} onPress={() => router.push(`/playlists/${playlist.id}-0`)}>  
               <Image
                  source={{uri: playlist.fotoCapa}}
                  style={{height: "100%", width: "100%", borderRadius: 19}}
               />
               <View style={{alignItems: "center"}}>
                    <Text style={{fontWeight: "800", fontSize: 16, marginVertical: 15}}>{playlist.nomePLaylist}</Text>
               </View>
               
            </TouchableOpacity>
        ))}

        </View>

        </ScrollView> 

      

     </View>
     </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
  
    fontWeight: "500",
    fontSize: 17,
   
    color: "black",
  },
  card: {
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