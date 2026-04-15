import { router } from "expo-router"
import { playlists } from "../../lib/playlists"
import { useLocalSearchParams } from "expo-router"
import { View, TouchableOpacity, StyleSheet, Image, Text, ScrollView, Button, Alert, ImageBackground } from "react-native"
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import React, { useState, useCallback, useRef } from "react";

import YoutubePlayer from "react-native-youtube-iframe";

import Ionicons from '@expo/vector-icons/Ionicons';
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";

export default function Playlist(){

    const { id } = useLocalSearchParams();

    const [playlistId, videoId] = id.split("-")
    
    const playlist = playlists.find(playlist => playlist.id === Number(playlistId))

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
    
    const linkid = playlists[Number(playlistId)].videos[Number(videoId)].linkid;
    const titulo = playlists[Number(playlistId)].videos[Number(videoId)].titulo;
    const descricao = playlists[Number(playlistId)].videos[Number(videoId)].descricao;

    return(
       <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
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
                {playlist.videos.map((video, index) => (  
                 <View  key={video.videoid + index}  style={{flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <TouchableOpacity  style={styles.cardvid}  onPress={() => router.push(`/playlists/${playlist.id}-${video.videoid}`)}>
                         <Image
                            source={{uri: video.fotoCapa}}
                            style={{height: "100%", width: "100%", borderRadius: 28, borderWidth: 2, borderColor: "white"}}
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
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btsaida: {
        marginTop: 30,
        borderWidth: 1,
        width: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
        marginLeft: 8,
        backgroundColor: "white",
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
    color: "white",
    fontWeight: "500",
    marginBottom: 8,
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