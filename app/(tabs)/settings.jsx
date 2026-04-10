import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from "react-native"
import Fontisto from '@expo/vector-icons/Fontisto';

export default function Settings(){

    const image = require('../../assets/images/fundo2.jpg')

    return(
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
            <View style={styles.card1}>
                <Text style={styles.texto}>Configurações</Text>
                <View style={{backgroundColor: "white", width: 45, height: 45, borderRadius: 30, alignItems: "center", justifyContent: "center"}}>
                 <Fontisto name="player-settings" size={25} color="black"/>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.texto}>Temas</Text>
                <View style={styles.card2}>
                    <Text>Light</Text>
                    <TouchableOpacity style={{}}></TouchableOpacity>
                </View>
                <View style={styles.card2}>
                    <Text>Dark</Text>
                    <TouchableOpacity></TouchableOpacity>
                </View>
            </View>
        </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
  image: {
    flex: 1, 
  },
  texto: {
    color: "white",
    fontWeight: "700"
  },
  card1: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,

  },
  card2: {
   backgroundColor: "white",
   width: "70%",
   height: 35,
   marginTop: 5,
   borderRadius: 20,
   justifyContent: "center",
   paddingLeft: 10
  }

})