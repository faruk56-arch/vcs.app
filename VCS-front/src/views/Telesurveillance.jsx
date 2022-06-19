import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Switch } from 'react-native';

const Telesurveillance = () => {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (

        <View style={styles.bigContainer}>
            <View style={styles.containerImage}>

                <Image style={styles.optionsImage} source={require('../images/option1.jpeg')} />

            </View>
            <View style={styles.optionsContainer}>
                {/* <Button>okkk</Button> */}
                <View style={styles.options}><Text style={styles.optionsText}>Caméra entrée maison</Text></View>
                <Switch
                    style={styles.switchButon}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.optionsContainer}>
                {/* <Button>okkk</Button> */}
                <View style={styles.options}><Text style={styles.optionsText}>Caméra salon</Text></View>
                <Switch
                    style={styles.switchButon}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.optionsContainer}>
                {/* <Button>okkk</Button> */}
                <View style={styles.options}><Text style={styles.optionsText}>Caméra cuisine</Text></View>
                <Switch
                    style={styles.switchButon}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.optionsContainer}>
                {/* <Button>okkk</Button> */}
                <View style={styles.options}><Text style={styles.optionsText}>Caméra chambre</Text></View>
                <Switch
                    style={styles.switchButon}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.optionsContainer}>
                {/* <Button>okkk</Button> */}
                <View style={styles.options}><Text style={styles.optionsText}>Caméra exterieure</Text></View>
                <Switch
                    style={styles.switchButon}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.optionsContainer}>
                {/* <Button>okkk</Button> */}
                <View style={styles.options}><Text style={styles.optionsText}>Détecteur fumée</Text></View>
                <Switch
                    style={styles.switchButon}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.optionsContainer}>
                {/* <Button>okkk</Button> */}
                <View style={styles.options}><Text style={styles.optionsText}>Détecteur gaz</Text></View>
                <Switch
                    style={styles.switchButon}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

        </View>
    );
}

export default Telesurveillance;

const styles = StyleSheet.create({
    optionsText: {
        color: 'white',
        textAlign: 'center'
    },
    switchButon: {
        marginTop: 25
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
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
    bigContainer: {
        marginTop: 20
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
        width: 100,
        height: 100

    }
});