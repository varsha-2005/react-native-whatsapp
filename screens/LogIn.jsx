import { StyleSheet, Text, View,TextInput,Button,Pressable } from 'react-native'
import React, { useState } from 'react'


export default function LogIn({navigation}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleLogin =() =>{
        alert('Login')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LogIn</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        keyboardType='email-address'
        value={email}
        onChangeText={setEmail}
      >
      </TextInput>
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      >
      </TextInput>
      <Pressable  onPress={handleLogin}>
        <Text style={styles.btn}>Login</Text>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Signup')}>
        <Text style={styles.SignBtn}>Don't have an account? Sign Up</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20,
    },
    title:{
        fontSize:24,
        marginBottom:20,
        textAlign:'center',
        fontWeight:'bold',
        color:'#25d366'
    },
    input:{
        height:40,
        borderColor:'#25d366',
        borderWidth:1,
        marginBottom:10,
        paddingHorizontal:8,
        borderRadius:5,
    },
    SignBtn:{
        marginTop:20,
        color:'#25d366',
        textAlign:'center',
    },
    btn:{
        backgroundColor: '#25d366',
        color: '#e3e8e5',
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 5,
        marginVertical: 10,
    },
})