import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { Image, Input, Button } from 'react-native-elements'


const LoginScreen = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const signIn=()=>{
        console.log("logged in")
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Image source={{
                uri: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
            }}
            style={{width: 200, height: 200}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" onChangeText={(text)=>setEmail(text)} />
                <Input placeholder="Password" secureTextEntry type="password" onChangeText={(text)=>setPassword(text)} />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} type="outline" title="Register" />
            <View style={{height: 50}}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
