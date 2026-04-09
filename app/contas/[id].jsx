import { cursos } from "../../lib/cursos"
import { router } from "expo-router"
import { contas } from "../../lib/contas"
import { useLocalSearchParams } from "expo-router"

import { View, TouchableOpacity, StyleSheet, Image, Text, ImageBackground } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Contas(){

    const { id } = useLocalSearchParams();

    const conta = contas.find(conta => conta.id === Number(id))

    const image = require('../../assets/images/fundoDados.jpg')

    return(
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
           <TouchableOpacity style={styles.botao} onPress={() => router.push(`../`)}>
               <Ionicons name="return-down-back" size={30} color="black" />
           </TouchableOpacity>
          
           <View style={styles.container}>
              <View style={{alignItems: "center", marginVertical: 10}}> 
              <Text style={styles.title}>Dados Pessoais</Text>
              <Image
                source = {{uri: conta.imagem}}
                style = {{width: 100, height: 100, borderRadius: 50, borderWidth: 1, marginTop: 10}}
              />
            </View>
             
              <Text style={styles.text}>Nome: {conta.nome}</Text>
             
              <Text style={styles.text}>Endereço: {conta.endereco}</Text>
              <Text style={styles.text}>Telefone: {conta.telefone}</Text>
              <Text style={styles.text}>Gmail: {conta.gmail}</Text>
              <Text style={styles.text}>Bairro: {conta.bairro}</Text>
              <Text style={styles.text}>CPF: {conta.cpf}</Text>
              <Text style={styles.text}>Idade: {conta.idade}</Text>
              <Text style={styles.text}>Genero: {conta.genero}</Text>
              <Text style={styles.text}>Estado Civil: {conta.estadoCivil}</Text>
              <Text style={styles.text}>Documentação: {conta.documentacao}</Text>  

              <TouchableOpacity style={styles.botao2}>
                <Text style={{fontWeight: "500"}}>Editar Dados</Text>
              </TouchableOpacity>

           </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(247, 255, 251, 0.36)',
        width: "100%",
        height: 500,
        marginTop: 20,
        borderRadius: 30,
        
    },
    botao: {
        width: 90,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginLeft: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white"
    },
    title: {
        fontSize: 25,
        fontWeight: "600",
        color: "white",
    },
    text:{
      color: "black",
      fontWeight: "400",
      marginTop: 2,
      marginLeft: 15,
    },
    image: {
    flex: 1,
  },
  botao2: {
    backgroundColor: "white",
    width: 100,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20",
    marginHorizontal: 155,
  }
})