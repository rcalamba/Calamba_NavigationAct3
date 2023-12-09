import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native'


function HomeScreen(props) {
    console.log(props);

    return (
        
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.head}>WELCOMEEE!</Text>
            <Text style={styles.text}>Riecagen P. Calamba</Text>
            <Text style={styles.text}>BSIT-3R8</Text>

            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Landing')}>
                <Text style={styles.btntext}>
                    Log Out
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
    
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        padding: 5,
        marginTop: 5,
    },
    head: {
        fontFamily: 'times new',
        fontWeight: 'bold',
        fontSize: 45,
        color: 'black',
        textAlign: 'center',
        marginTop: 200,
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
        marginTop: 100,
        marginLeft: 25,
        marginRight: 25,
    },
    btntext: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    }
});

export default HomeScreen;