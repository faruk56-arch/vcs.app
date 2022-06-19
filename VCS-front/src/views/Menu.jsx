import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Input, Button, ThemeProvider } from 'nachos-ui';
import Icon from 'react-native-vector-icons/AntDesign';


const Menu = ({ navigation }) => {
    return (
        <ThemeProvider>

            <View style={styles.container1}>


                <View style={styles.container2}>
                    <Text>Bienvenue !</Text>
                    <Text style={styles.userNameText}>Alex</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.accountButton}>
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.container3}>

                <Text style={styles.optionText}>Selectionner votre option</Text>

                <View style={styles.optionsContainer}>

                    <View style={styles.option1AndOption2}>

                        <TouchableOpacity style={styles.options} onPress={() => navigation.navigate('Télésurveillance')}>

                            <Image style={styles.optionsImage} source={require('../images/option1.jpeg')} />

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.options} onPress={() => navigation.navigate('Action urgence')}>

                            <Image style={styles.optionsImage} source={require('../images/option2.jpeg')} />

                        </TouchableOpacity>

                    </View>

                    <View style={styles.option3}>

                        <TouchableOpacity style={styles.options} onPress={() => navigation.navigate('Outils connectés')}>

                            <Image style={styles.optionsImage} source={require('../images/option3.jpeg')} />

                        </TouchableOpacity>

                    </View>

                </View>

            </View>

        </ThemeProvider>
    );
}

export default Menu;

const styles = StyleSheet.create({
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    container2: {
        marginLeft: 30,
        marginBottom: 20,
        marginTop: 10
    },
    accountButton: {
        marginRight: 30,
        marginTop: 10

    },
    userNameText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    container3: {
        backgroundColor: 'rgb(50, 74, 89)',
        paddingBottom: '75%',
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    optionText: {
        color: 'white',
        marginLeft: 40,
        marginTop: 15,
        fontSize: 15
    },
    optionsContainer: {
        marginTop: 50
    },
    options: {
        width: 125,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center'

    },
    option1AndOption2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    option3: {
        marginTop: 30,
        alignItems: 'center',
    },
    optionsImage: {
        // flex: 'auto',
        width: '90%',
        height: '80%',
    }
});