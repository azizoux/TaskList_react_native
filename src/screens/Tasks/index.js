import React, { useState } from 'react'
import Header from '../../components/Header'
import { useSelector } from 'react-redux'
import { getTasks } from '../../redux/selectors'
import TaskForm from './TaskForm'
import FloatingBtn from '../../components/FloatingBtn'
import Counter from '../../components/Counter'
import { FlatList, StyleSheet, View } from 'react-native'

import TaskTile from './TaskTile'


export default function TaskScreen() {
    const tasks = useSelector(getTasks)
    console.log(tasks);
    const [isFormVisible, setIsFormVisible] = useState(false)
    const renderItem = ({item}) => {
        return <TaskTile task={item} />
    }
  
    const _toggleForm = () => {
        setIsFormVisible(!isFormVisible)
    }
  return (
    <>
      <FlatList 
        ListHeaderComponent={
        <View>
            <Header />
            {isFormVisible ? <TaskForm /> : null }
            <View style={styles.containerCounter}>
              <Counter nb={tasks.length} title="Les taches crées" />
              <Counter nb={tasks.filter(t => t.isCompleted === true).length} title="Les taches effectuées" />
            </View>
        </View>
        }
        contentContainerStyle={{flexGrow:1,}}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FloatingBtn toggle={_toggleForm} isFormVisible={isFormVisible} />
    </>
  )
}


const styles = StyleSheet.create({
  containerCounter:{
    flexDirection:"row",
    justifyContent: "space-between",
    padding:10
  }
})