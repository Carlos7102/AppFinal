import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, Linking } from "react-native"
import Fontisto from '@expo/vector-icons/Fontisto';

export default function Settings(){

    const image = require('../../assets/images/fundo2.jpg')

    const instagramUrl = 'https://www.instagram.com/carlos_ekk/';

    const abrirRedeSocial = async (url) => {
  // Verifica se o app suporta o link
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    // Abre o link
    await Linking.openURL(url);
  } else {
    Alert.alert(`Não foi possível abrir o link: ${url}`);
  }
};


    return(
         <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
           <Text style={styles.titulo}>CONFIGURAÇÕES</Text>

           <View style={{backgroundColor: "white", height: 1, width: "100%", marginTop: 10,}}></View>

           <Text style={styles.texto}>App Info</Text>
           <View style={styles.card}>
            <Text style={styles.texto2}>Contact Us</Text>

            <TouchableOpacity   onPress={() => abrirRedeSocial(instagramUrl)}>
                <Image
                  source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s"}}
                  style={{height: 50, width: 50, borderRadius: 10, marginVertical: 10}}
                />
                
            </TouchableOpacity>
            <Text style={styles.texto3}>Talk to the devs.</Text>

            <Text tyle={styles.texto2}>  © 2026-2026 kotlin technologies. ALL right reserved. Artwork made with kotlin by Carlos eduardo.</Text>
           </View>


        </View>
        </ImageBackground> 
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    titulo: {
      color: "white",
      fontWeight: "800",
      marginTop: 40,
      fontSize: 17,
    },
  image: {
    flex: 1, 
  },
  texto: {
    color: "white",
    fontWeight: "700",
    marginTop: 40
  },
  card: {
   backgroundColor: "#D9D9D9",
   width:"95%",
   height: 270,
   borderRadius: 30,
   marginTop: 10,
   
   alignItems: "center",
  },
  texto2: {
    fontWeight: "600",
    marginTop: 5,
    fontSize: 17,
  },
  texto3: {
    fontWeight: "600",
    marginBottom: 70,
    marginTop: 20,
    fontSize: 17,
  },
})