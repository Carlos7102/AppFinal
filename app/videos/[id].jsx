// import { router } from "expo-router"
// import { playlists, videos } from "../../lib/playlists"
// import { useLocalSearchParams } from "expo-router"
// import { View, TouchableOpacity, StyleSheet, Image, Text, ScrollView, Button, Alert, ImageBackground } from "react-native"
// import { WebView } from 'react-native-webview';
// import Constants from 'expo-constants';
// import React, { useState, useCallback, useRef } from "react";

// import YoutubePlayer from "react-native-youtube-iframe";

// import Ionicons from '@expo/vector-icons/Ionicons';

// export default function Video(){

//     const { id } = useLocalSearchParams();

//     const playlist = playlists.find(playlist => playlist.id === Number(id))


//         const [playing, setPlaying] = useState(false);
    
//         const onStateChange = useCallback((state) => {
//         if (state === "ended") {
//           setPlaying(false);
//           Alert.alert("video has finished playing!");
//         }
//         }, []);
    
//        const togglePlaying = useCallback(() => {
//         setPlaying((prev) => !prev);
//         }, []);

      
    
//       const linkid = playlists[id].videos[id].linkid;
//       const titulo = playlists[id].videos[id].titulo;
//       const descricao = playlists[id].videos[id].descricao;
    
//     return(
//         <View style={styles.container}>

//         <YoutubePlayer
//         height={250}
//         play={playing}
//         videoId={linkid}
//         onChangeState={onStateChange}
//         />

//          <Text style={styles.titulo}>{titulo}</Text>
//          <Text style={styles.texto}>{descricao}</Text>

    
//         <TouchableOpacity onPress={() => router.push(`../`)}>
//             <Text>volta</Text>
//         </TouchableOpacity>

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     titulo: {
//     fontSize: 18,
//     fontWeight: "600",
//     paddingLeft: 5, 
//     color: "black"
//   },
//   texto: {
//     fontSize: 15,
//     paddingLeft: 6, 
//     marginTop: 10,
//     color: "black"
//   },
// })