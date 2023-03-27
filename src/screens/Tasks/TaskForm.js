import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextInput, StyleSheet, Button, View } from 'react-native'
import { addTask } from '../../redux/actions'

export default function TaskForm() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const handleTitle = (val) => {
        setTitle(val)
    }
    const onAddTask = () => {
        if(title === "") return
        dispatch(addTask(title))
        setTitle("")
        
    }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTitle}
        value={title}
        placeholder="Nouvelle tache"
      />
      <Button
        onPress={onAddTask}
        title="Ajouter"
        color="#007AFF"
        style={styles.btn}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10
    },
    input:{
        borderColor: "black",
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,
        height: 40,
        width: "70%"
    },
    btn:{
      borderRadius:10
    }
})
