import { router } from "expo-router"
import { playists } from "../../lib/videos"
import { useLocalSearchParams } from "expo-router"
import { View, TouchableOpacity, StyleSheet, Image, Text, ScrollView, Button, Alert, ImageBackground } from "react-native"
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import React, { useState, useCallback, useRef } from "react";

import YoutubePlayer from "react-native-youtube-iframe";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Videos(){

    const { id } = useLocalSearchParams();
    
    const playist = playists.find(playist => playist.id === Number(id))

    console.log(playists)

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
    }, []);

   const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
    }, []);

    const image = require('../../assets/images/fundoDados.jpg')
    
    const linkid = playists[id].videos[id].linkid;
    const titulo = playists[id].videos[id].titulo;
    const descricao = playists[id].videos[id].descricao;

    

    return(
        //<ImageBackground source={image} resizeMode="cover" style={styles.image}> 
       <View style={styles.container}>
          
        <YoutubePlayer
        height={250}
        play={playing}
        videoId={linkid}
        onChangeState={onStateChange}
        />
       
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.texto}>{descricao}</Text>
        <ScrollView> 

                {playist.videos.map((video, index) => (  
                 <View  key={video.videoid + index}  style={{flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <TouchableOpacity  style={styles.cardvid}  onPress={() => router.push(`/videos/${video.videoid}`)}>
                         <Image
                            source={{uri: video.fotoCapa}}
                             style={{height: "100%", width: "100%", borderRadius: 28}}
                         />
                   </TouchableOpacity>  
                     <Text style={styles.texto}>{video.titulo.slice(0, 16)}</Text>
                </View>
                  
            ))}

         </ScrollView>
            
           <TouchableOpacity style={styles.btsaida} onPress={() => router.push(`/explore`)}>
               <Ionicons name="return-down-back" size={30} color="black" />
           </TouchableOpacity>

        </View>
       // </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btsaida: {
        marginTop: 50,
        borderWidth: 1,
        width: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginLeft: 8,
        backgroundColor: "white",
    },
    container2: {
    flex: 1,
    height: 100,
    marginTop: Constants.statusBarHeight,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 5, 
    color: "black"
  },
  texto: {
    fontSize: 15,
    paddingLeft: 6, 
    marginTop: 10,
    color: "black"
  },
  cardvid: {
    borderWidth: 1,
    borderColor: "black",
    width: "46%",
    height: 120,
    borderRadius: 30,
    marginLeft: 6,
    marginTop: 10,
  },
   image: {
    flex: 1,
  },
})