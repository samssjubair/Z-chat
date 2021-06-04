import React, { useLayoutEffect, useState } from 'react'
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, SetImageUrl] = useState("");


    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        });
    }, [navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.updateProfile({  // problem here (solved)
                    displayName: name,
                    photoURL: imageUrl || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
                })
            })
            .catch(error => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text h3 style={{ marginBottom: 50 }}>
                Create a Z account
            </Text>
            <View style={styles.inputContainer}>
                {/* Name */}
                <Input placeholder="Full Name" autofocus type="text" value={name} onChangeText={text => setName(text)} />

                {/* Email */}
                <Input placeholder="Email" type="email" value={email} onChangeText={text => setEmail(text)} />

                {/* Password */}
                <Input placeholder="Password" autofocus type="text"
                    secureTextEntry value={password} onChangeText={text => setPassword(text)} />

                {/* ImageUrL */}
                <Input placeholder="Profile Picture URL (optional)" type="text" value={imageUrl} onChangeText={text => SetImageUrl(text)} onSubmitEditing={register} />
            </View>
            <Button
                type="clear"
                onPress={register}
                raised
                title="Register"
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300,
    }
});