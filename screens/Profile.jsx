import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

export default function Profile() {
    return (
        <View style={styles.container}>
            
            <View style={styles.picContainer}>
                <Image
                    source={{ uri: 'https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900929.jpg?ga=GA1.1.2039838253.1695187322&semt=ais_hybrid' }}
                    style={styles.img}
                />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>Name</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>Name</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>Name</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e8e5',
    },
    
    picContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'white',
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    infoBox: {
        height: 50,
        backgroundColor: '#000',
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    infoText: {
        fontSize: 16,
        color: '#25d366'
    },
    arrow: {
        fontSize: 20,
        color: '#25d366'
    }
})
