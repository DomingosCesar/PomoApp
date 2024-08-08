import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";

export default PrincipleScreen = () =>{
    return(
        <SafeAreaView>
            <View style={styles.boxTitle}>
                <Text style={styles.textTitle}>Pomos</Text>
            </View>
            <View style={styles.imageView}>
                <Image source={require('../../assets/adaptive-icon.png')} style={styles.image} />
            </View>
            <View style={styles.texView}>
                <Text style={styles.textWelcome}>Welcome, to PomoApp.</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTitle: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 50,
        marginBottom: 10
      },
      textTitle:{
          color: "#FF0043",
          fontSize:34,
          fontWeight: "bold",
      },
      imageView:{
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
      },
    image:{
        width: 340,
        height: 270,
    },
    texView:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        // border: 5,
        // borderColor: '#fff',
    },
    textWelcome:{
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    }
})