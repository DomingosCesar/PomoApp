import React from 'react'
import { View, Text, StyleSheet, Image }  from 'react-native'

export default Home = () => {
    return (
     <View style={styles.container}>
        <View style={styles.menu}>
            <Text style={styles.title}>Pomos</Text>
        </View>

        <View style={styles.body}>
            <Image source={require('../../imgs/trader.gif')} style={styles.imgSize}/>
            <Text style={styles.text_body}>Welcome to Pomos App</Text>
        </View>
     </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, .9)",
    }, 
    menu:{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 70,
        backgroundColor: "#e0e0e0",
        marginTop: 40,
        marginBottom: 12,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    title:{
        fontSize: 25,
        fontWeight: "bold",
    },
    body:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        marginTop: 5,
        paddingTop: 30,
    },
    imgSize:{
        width: "86%",
        height: "50%",
        borderRadius: 10,
        marginBottom: 50,
    },
    text_body:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    }

})