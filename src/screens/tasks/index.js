import React from 'react'
import { View, Text, StyleSheet }  from 'react-native'
import Task from './task'


export default Tasks = () => {
    return (
     <View style={styles.container}>
        <Text style={styles.title}>Tasks</Text>
        <Task />
     </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, .9)",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 54,
    },
    title:{
        color: "#fff",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 18,
        fontStyle: "italic",
    }
})