import { Button, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";


function LandingScreen(props) {
    console.log(props);

    return (
        
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.head}>HELLO HUMANS!</Text>
            <Text style={styles.text}>Do you have an account?</Text>

            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.btntext}>
                    Log In
                </Text>
            </TouchableOpacity>
                      
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Signup')}>
                <Text style={styles.btntext}>
                    Register
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
        marginTop: 200,
        marginBottom: 10,
    },
    text: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginBottom: 25,
    },
    button: {
        backgroundColor: 'grey',
        borderRadius: 0,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 10,
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

export default LandingScreen;