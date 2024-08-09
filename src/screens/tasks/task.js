import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity }  from 'react-native'
import {Ionicons} from '@expo/vector-icons';


export default Task = () => {
    return (
     <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>Task Name</Text>
        </View>

        <View style={[styles.btn_container, styles.btn_edit]}>
            <TouchableOpacity style={styles.btn}>
                {/* <Text style={styles.btnText}>Edit</Text> */}
                <Ionicons size={20} name="pencil" color={"#fff"}/>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.btn_del]}>
                {/* <Text style={styles.btnText}>Delete</Text> */}
                <Ionicons size={20} name="trash" color={"#fff"}/>
            </TouchableOpacity>
        </View>
     </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(255, 255, 255, .8)",
        flexDirection: "column",
        width: "95%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        paddingLeft: 5,
        paddingTop: 20,
        // paddingBottom: 20,
        borderRadius: 5,
    },
    content:{
        width: "95%",
        justifyContent: "center",
    },
    title:{
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
    },
    btn_container:{
        width: "95%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 10,
        
    },
    btn:{
        width: 80,
        height: 40,
        padding: 10,
        backgroundColor:'#392DE9',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
        borderRadius: 5,
    },
    // btn_edit:{
    //     marginRight: 0,
    // },
    btn_del:{
        marginLeft: 12,
    },
    btnText:{
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff"
    }
})