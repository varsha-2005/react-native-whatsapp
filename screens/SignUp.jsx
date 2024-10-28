import { StyleSheet, Text, View,TextInput,Button,Pressable } from 'react-native'
import React, { useState } from 'react'

export default function SignUp({navigation}) {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [conPassword,setConPassword] = useState('')
    
    const handleSignUp = ()=>{
        alert('Sign Up')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder='Name'
        value={name}
        onChangeText={setName}
      >
      </TextInput>
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
      <TextInput
        style={styles.input}
        placeholder='Conform Password'
        secureTextEntry
        value={conPassword}
        onChangeText={setConPassword}
      >
      </TextInput>
      <Pressable  onPress={handleSignUp}>
        <Text style={styles.btn}>Sign Up</Text>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.logBtn}>Already have an account? Login</Text>
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
        color:'#25d366',
    },
    input:{
        height:40,
        borderColor:'#25d366',
        borderWidth:1,
        marginBottom:10,
        paddingHorizontal:8,
        borderRadius:5,
    },
    logBtn:{
        marginTop:20,
        color:'#1e90ff',
        textAlign:'center',
        color:'#25d366'
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