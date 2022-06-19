import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Input, Button, ThemeProvider } from 'nachos-ui';



const Login = ({ navigation }) => {

    const [userNameValue, setUserNameValue] = useState("")
    const [numberValue, setNumberValue] = useState()
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")


    return (

        <ThemeProvider>

            <View style={styles.container}>

                <Text style={StyleSheet.flatten(styles.titleText)}>S'inscrire</Text>
                <View >
                    <Input
                        status='normal'
                        style={StyleSheet.flatten(styles.inputFields)}
                        placeholder='Username'
                        value={userNameValue}
                        onChangeText={userNameValue => setUserNameValue(userNameValue)}
                    />
                    <Input
                        status='normal'
                        style={StyleSheet.flatten(styles.inputFields)}
                        placeholder='Numero'
                        value={numberValue}
                        onChangeText={numberValue => setNumberValue(numberValue)}
                    />
                    <Input
                        status='normal'
                        style={StyleSheet.flatten(styles.inputFields)}
                        placeholder='Adresse email'
                        value={emailValue}
                        onChangeText={emailValue => setEmailValue(emailValue)}
                    />
                    <Input
                        status='normal'
                        style={StyleSheet.flatten(styles.inputFields)}
                        placeholder='Mot de passe'
                        value={passwordValue}
                        onChangeText={passwordValue => setPasswordValue(passwordValue)}
                    />
                </View>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button}>

                        <Image style={styles.image} source={require('../images/Arrow-Right.svg')} />

                    </TouchableOpacity>

                </View>

                <View style={styles.text3}>

                    <Text>Deja utilisateur ? <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>S'identifier</Text></Text>

                </View>

            </View>

        </ThemeProvider>

    );
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        // flex: 1,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20
    },
    inputFields: {
        marginLeft: 30,
        marginTop: 15,
        marginRight: 30,
        marginBottom: 10
    },
    buttonContainer: {
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        marginTop: 55

    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(50, 74, 89)',
        borderRadius: 30,
        justifyContent: 'center',
        marginRight: 50

    },
    image: {
        flex: .2,

    },
    text3: {
        marginLeft: 30,
        marginTop: 50
    },
    loginLink: {
        fontWeight: 'bold'
    }
});

