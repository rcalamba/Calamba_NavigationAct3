import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import { TextInput } from "react-native-paper";
import fetchServices from '../services/fetchServices.js';

function LoginScreen({ navigation }) {

    const [showPass, setShowPass] = React.useState(false);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errors, setErrors] = React.useState("");
    const [loading, setLoading] = React.useState("");

    const showToast = (message = 'Something went wrong') => {
        ToastAndroid.show(message, 3000)
    };

    const handleLogin = async () => {
        try{
            setLoading(true);
            if(email === ""){
                setErrors({ email: true});
                return false;
            }
            if(password === ""){
                setErrors({ password: true});
                return false;
            }

            // url to be used for database, depends on pc or laptop
            // open postman to test, phpmyadmin to see data
            const url = 'http://192.168.1.39:8000/api/v1/login';
            const data = {
                email,
                password,
            };

            const result = await fetchServices.postData(url, data);
            
            if (result.message != null) {
                showToast(result?.message);
              } else {
                navigation.navigate("Home");
              }
            } catch (e) {
              console.debug(e.toString());
            }
          };

    return (
        <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button3} onPress={() => props.navigation.navigate('Landing')}>
                <Text style={styles.btntext3}>
                 Go Back
                </Text>
            </TouchableOpacity>

            <Text style={styles.head}>Log In</Text>
            <Text style={styles.text}>Welcome back my dear human!</Text>
            
            <TextInput
            style={styles.input}
            placeholder=''
            label='Email'
            value={email}
            onChangeText={setEmail}
            error={errors?.email}
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Password'
            secureTextEntry={!showPass}
            right={
                <TextInput.Icon
                icon={!showPass ? "eye" : "eye-off"}
                onPress={() => setShowPass(!showPass)}
                />
            }
            value={password}
            onChangeText={setPassword}
            error={errors?.password}
            />

            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Recovery')}>
                <Text style={styles.btntext2}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={handleLogin}>
                <Text style={styles.btntext1}>
                    Log In
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        padding: 10,
        marginTop: 10,
    },
    head: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 50,
        color: 'black',
        textAlign: 'center',
        marginTop: 100,
        margin: 20,
    },
    text: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginBottom: 25,
    },
    button1: {
        backgroundColor: 'grey',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25,
    },
    button2: {
        backgroundColor: 'lightgrey',
        borderRadius: 0,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 25,
        marginRight: 25,
    },
    button3: {
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 15,
        marginRight: 290,
    },
    btntext1: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    btntext2: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    btntext3: {
        fontFamily: 'sans-serif',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left'
    },
    input: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderWidth: 3, 
        borderColor: 'grey', 
        borderRadius: 0,
        margin: 8,
        fontFamily: 'sans-serif',
        fontSize: 20, 
        backgroundColor: 'white',
    }
});

export default LoginScreen;