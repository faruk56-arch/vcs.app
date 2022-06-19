import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ThemeProvider from 'nachos-ui';


// import Login from './Login'

const Homepage = ({ navigation }) => {




    return (


        <View style={styles.container}>

            <View style={styles.container2}>

                <Image style={styles.image} source={require('../images/Vector2.png')} />

                <Text style={styles.textContainer2}>
                    Vieillir chez soi
                </Text>

            </View>

            <View style={styles.container3}>

                <Text style={styles.textContainer3}>
                    Protégez-votre domicile et les personnes qui y vivent 24h/24
                </Text>

            </View>

            <View style={styles.container4}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonContainer4}>

                    <Image style={styles.image2} source={require('../images/Arrow-Right.svg')} />

                </TouchableOpacity>

            </View>

        </View>

    );
}

export default Homepage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container2: {
        backgroundColor: 'rgb(50, 74, 89)',
        height: 300,
        marginTop: 60,
        display: 'flex',
        alignSelf: 'stretch',
        color: 'white',
        alignItems: 'center',

    },
    image: {
        marginTop: 15,
        width: 150,
        height: 150,
        // color: 'black'

    },
    textContainer2: {
        color: 'white',
        fontSize: 47,
    },

    textContainer3: {
        fontSize: 30,
        width: 335,
        textAlign: 'center',
        marginTop: 30

    },
    container4: {
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        marginTop: 55

    },

    buttonContainer4: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(50, 74, 89)',
        borderRadius: 30,
        justifyContent: 'center',
        marginRight: 50

    },
    image2: {
        flex: .2,

    },


});

