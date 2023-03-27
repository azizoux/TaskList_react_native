import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleTask } from '../../redux/actions'
import { Text, Image, StyleSheet, View, Pressable } from 'react-native'

export default function TaskTile({ task }) {
    const dispatch = useDispatch()
    const handleStatus = () => {
        dispatch(toggleTask(task.id))
    }
    const onDeleteTask = () => {
        dispatch(deleteTask(task.id))
    }
  return (
    <View style={styles.container}>
        <Pressable onPress={handleStatus} >
            <View style={styles.subContainer}>
                <Image 
                    style={styles.check}
                    source={task.isCompleted ? require('../../../assets/icons/check_circle.png') : require('../../../assets/icons/unchecked_circle.png')}
                />
                <Text style={styles.title}>{task.title}</Text>
            </View>
        </Pressable>
        <Pressable onPress={onDeleteTask} >
            <Image 
                style={styles.check}
                source={require('../../../assets/icons/delete.png')}
            />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20
    },
    subContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        marginLeft: 20,
        fontSize: 16
    },
    check:{
        width:30,
        height:30
    }
})
