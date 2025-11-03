import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text , Image } from 'react-native'

export default function DanhThiepCaNhan() {
    return (
        <View style={styles.container}>
            <Text style = { styles.introduce}>Danh thiep ca nhan</Text>
            <View style = {styles.card}s>
                <Image source={require('./assets/logo.jpg')} style = {styles.avartar}/>
                <Text>Họ và tên: Phạm Tiến Công</Text>
                <Text>Nghề nghiệp: Lập trình viên Mobile</Text>
                <Text>Email: phamthanhvp75@mail.com</Text>
                <Text>Phone: 0123456789</Text>
                <StatusBar style="auto" />  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
    },
    introduce : {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        width: 300,

    },
    avartar : {
        width: 100,
        height: 100,
    },
});