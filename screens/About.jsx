import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function About({navigation}) {
    const [showInstruction, setShowInstruction] = useState(false);
    const handleOpen = () => {
        setShowInstruction(true);
    };

    return (
        <View style={styles.Maincontainer}>
            {showInstruction ? (
                <View style={styles.inst}>
                    <Text style={styles.instTitle}>Instructions</Text>
                    <Text style={styles.instText}>1. Open the app and sign in.</Text>
                    <Text style={styles.instText}>2. Navigate to your contacts and start a chat.</Text>
                    <Text style={styles.instText}>3. Enjoy all the features WhatsApp has to offer!</Text>
                    <Text style={styles.instText}>4. Connect with friends and family seamlessly.</Text>
                    <Pressable onPress={() => navigation.navigate('Login')} style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </Pressable>
                </View>
            ) : (
                <View style={styles.container}>
                    <Image
                        source={{ uri: 'https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900929.jpg?ga=GA1.1.2039838253.1695187322&semt=ais_hybrid' }}
                        style={styles.img}
                    />
                    <Text style={styles.txt}>What's App</Text>
                    <Pressable onPress={handleOpen} style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
        backgroundColor: '#e3e8e5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    container: {
        alignItems: 'center',
    },
    img: {
        width: 180,
        height: 180,
        borderRadius: 90,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
    },
    txt: {
        color: '#25d366',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    instructionLink: {
        color: '#25d366',
        fontSize: 18,
        marginTop: 10,
        textDecorationLine: 'underline',
        fontWeight: '600',
    },
    inst: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 8,
        width: '90%',
        alignItems: 'center',
    },
    instTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#25d366',
    },
    instText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
        marginVertical: 5,
        lineHeight: 22,
    },
    button: {
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 30,
        backgroundColor: '#25d366',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});
