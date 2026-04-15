import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { router } from "expo-router"


 const Stack = createNativeStackNavigator();


export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

   const isFormValid = email === 'ceduardo190706@gmail.com' && senha === '000';

     const handleLogin = () => {
    if (isFormValid) {
      router.push('/home');
    }
  };
    return(
         <View style={styles.container}>
       
       <Image
         source={require("../../assets/images/logo.png")}
         style={styles.logo}
       />
       <Text style={styles.titulo}>LearnHub</Text>
  
       <TextInput
         placeholder="Email"
         value={email}
         onChangeText={setEmail}
         style={styles.input}
         keyboardType="email-address"
         autoCapitalize="none"
       />

       <TextInput
         placeholder="Senha"
         value={senha}
         onChangeText={setSenha}
         secureTextEntry
         style={styles.input}
       />

       <TouchableOpacity
         style={[styles.button, { backgroundColor: isFormValid ? '#4CAF50' : '#ccc' }]}
         onPress={handleLogin}
        disabled={!isFormValid}
       >
         <Text style={styles.buttonText}>Entrar</Text>
       </TouchableOpacity>
     </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 9,
    marginTop: 120,
    borderWidth: 2,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#252525',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 40,
    fontWeight: "600",
    
    
  }
});