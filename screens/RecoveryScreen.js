import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput } from "react-native-paper";

function RecoveryScreen(props) {
    

    return (
        
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.head}>Recover Your Account</Text>
            <Text style={styles.text}>Check your Email.</Text>

            <TextInput
            style={styles.input}
            placeholder=''
            label='Email'
            />

            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.btntext}>
                    Recover Account
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        padding: 15,
        marginTop: 15,
    },
    head: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 45,
        color: 'black',
        textAlign: 'center',
        marginTop: 160,
        marginBottom: 20,
    },
    text: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    button: {
        backgroundColor: 'grey',
        borderRadius: 0,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25,
    },
    btntext: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    },
    input: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderWidth: 3, 
        borderColor: 'grey', 
        borderRadius: 6,
        margin: 8,
        fontFamily: 'sans-serif',
        fontSize: 20, 
        backgroundColor: 'white',
    }
});

export default RecoveryScreen;