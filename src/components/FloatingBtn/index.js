import React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'

export default function FloatingBtn({ toggle, isFormVisible }) {
  return (
    <Pressable onPress={toggle} style={styles.btn}>
        <Text style={styles.txt}>{isFormVisible ? "x" : "+" }</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btn:{
        position: "absolute",
        right: 20,
        bottom: 20,
        padding: 20,
        backgroundColor: "orange",
        borderRadius: 50,
        width:50,
        height:50,
        justifyContent: "center",
        alignItems: "center"
    },
    txt:{
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        color: "white"
    }
})
