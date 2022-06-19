import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Fontisto';
// import Icon2 from 'react-native-vector-icons/AntDesign';
// import { Input, Button, ThemeProvider } from 'nachos-ui';



const Login = ({ navigation }) => {

    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")


    return (

        // <ThemeProvider>

        <View style={styles.container}>

            <Text style={styles.titleText}>S'identifier</Text>
            <View >
                <Input
                    placeholder='Adresse email'
                    style={styles.inputFields}
                    value={emailValue}
                    onChangeText={emailValue => setEmailValue(emailValue)}
                    leftIcon={
                        <Icon
                            style={styles.inputIcon}
                            name='email'
                            size={24}
                            color='black'
                        />
                    } />
                <Input
                    placeholder='Mot de passe'
                    style={styles.inputFields}
                    value={passwordValue}
                    onChangeText={passwordValue => setPasswordValue(passwordValue)}
                    leftIcon={
                        <Icon
                            style={styles.inputIcon}
                            name='locked'
                            size={24}
                            color='black'
                        />
                    } />
                {/* <Input
                    status='normal'
                    style={styles.inputFields}
                    placeholder='Adresse email'
                    value={emailValue}
                    onChangeText={emailValue => setEmailValue(emailValue)}
                />
                <Input
                    status='normal'
                    style={styles.inputFields}
                    placeholder='Mot de passe'
                    value={passwordValue}
                    onChangeText={passwordValue => setPasswordValue(passwordValue)}
                /> */}
            </View>

            <View style={styles.text2}>

                <Text>Mot de passe oublié ?</Text>

            </View>

            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>

                    <Image style={styles.image} source={require('../images/Arrow-Right.svg')} />

                </TouchableOpacity>

            </View>

            <View style={styles.text3}>

                <Text>Nouveau utilisateur ? <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>S'inscrire</Text></Text>

            </View>

        </View>

        // </ThemeProvider>

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
    text2: {
        alignItems: 'center',
        marginTop: 30
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
    signupLink: {
        fontWeight: 'bold'
    },
    inputIcon: {
        marginLeft: 10
    }

});

