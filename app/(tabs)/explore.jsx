import { View, StyleSheet, TextInput, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { videos } from "../../lib/videos"
import { cursos } from "../../lib/cursos"

export default function TabTwoScreen() { 

  return (
     <View style={styles.Container}>

       <TextInput
          style={styles.Input}
          placeholder="Informe o assunto"
        />

        <Text style={styles.texto}>Videos</Text>

       
       <ScrollView style={{backgroundColor: "white"}} horizontal showsHorizontalScrollIndicator={false}>
       <View style={{flexDirection: "row",backgroundColor: "gray", height: 220, alignItems: "center"}}> 
        {videos.map((video, index) => (
            <TouchableOpacity key={video.titulo + index} style={styles.card}>
                   <Text>{video.link}</Text>
                  <Text>{video.titulo}</Text>
            </TouchableOpacity>
        ))}
         </View>
        </ScrollView> 

         <Text style={styles.texto}>Cursos</Text>

        <ScrollView style={{backgroundColor: "white"}} horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: "row", backgroundColor: "gray", height: 220, alignItems: "center"}}> 
        {videos.map((video, index) => (
            <TouchableOpacity key={video.titulo + index} style={styles.card}>
                   <Text>{video.link}</Text>
                  <Text>{video.titulo}</Text>
            </TouchableOpacity>
        ))}
        </View>
        </ScrollView> 
        

     </View>
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
    marginTop: 22,
    marginLeft: 30,
    fontWeight: "700",
    fontSize: 20,
  },
  card: {
    backgroundColor: "white",
    height:190,
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: 6,
    
    

  }
});
