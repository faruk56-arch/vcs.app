import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Outilsconnectes = () => {

    return (

        <View style={styles.bigContainer}>
            <View style={styles.containerImage}>

                <Image style={styles.optionsImage} source={require('../images/option3.jpeg')} />

            </View>
            <View style={styles.optionsContainer}>
                {/* <Button>okkk</Button> */}
                <TouchableOpacity style={styles.options}><Text style={styles.optionsText}>Accès aux portes</Text></TouchableOpacity>
                <TouchableOpacity style={styles.options}><Text style={styles.optionsText}>Accès aux fênetres</Text></TouchableOpacity>
                <TouchableOpacity style={styles.options}><Text style={styles.optionsText}>Accès aux lumières</Text></TouchableOpacity>
                <TouchableOpacity style={styles.options}><Text style={styles.optionsText}>Accès à la temperature</Text></TouchableOpacity>

            </View>
        </View>

    );
}

export default Outilsconnectes;

const styles = StyleSheet.create({
    bigContainer: {
        marginTop: 20
    },
    optionsText: {
        color: 'white',
        textAlign: 'center'
    },
    containerImage: {
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: 425,
        position: 'relative',
        height: 100,
    },
    optionsImage: {
        width: 150,
        height: 100

    },
    optionsContainer: {
        justifyContent: 'space-around',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    options: {
        marginTop: 10,
        marginLeft: 10,
        width: 200,
        height: 50,
        backgroundColor: 'rgb(50, 74, 89)',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'

    },
});