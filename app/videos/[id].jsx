
import { router } from "expo-router"
import { videos } from "../../lib/videos"
import { useLocalSearchParams } from "expo-router"
import { View, TouchableOpacity, StyleSheet, Image, Text, ScrollView, Button, Alert, ImageBackground } from "react-native"
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import React, { useState, useCallback, useRef } from "react";

import YoutubePlayer from "react-native-youtube-iframe";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Cursos(){

    const { id } = useLocalSearchParams();
    
    const video = videos.find(video => video.id === Number(id))

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
    
    return(
        <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
       <View style={styles.container}>
          
        <YoutubePlayer
        height={250}
        play={playing}
        videoId={video.linkid}
        onChangeState={onStateChange}
        />

        <Text style={styles.titulo}>{video.titulo}</Text>
        <Text style={styles.texto}>{video.descricao}</Text>
        <ScrollView> 
            {videos.map((videos, index) => (
                <View key={videos.linkid + index} style={{flexDirection: "row", alignItems: "center", gap: 20}}>
                    <TouchableOpacity style={styles.cardvid}>
                         
                    </TouchableOpacity>  
                    <Text style={styles.texto}>t</Text>
                </View>
                        
            ))}

         </ScrollView>
            <TouchableOpacity style={styles.btsaida} onPress={() => router.push(`/explore`)}>
               <Ionicons name="return-down-back" size={30} color="black" />
           </TouchableOpacity>


        </View>
        </ImageBackground>
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
    color: "white"
  },
  texto: {
    fontSize: 15,
    paddingLeft: 6, 
    marginTop: 10,
    color: "white"
  },
  cardvid: {
    borderWidth: 2,
    borderColor: "white",
    width: "50%",
    height: 150,
    borderRadius: 30,
    marginLeft: 5,
    marginTop: 10,
  },
   image: {
    flex: 1,
  },
})

