import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Header} from '../components/Header'
import { TasksList } from '../components/TasksList'
import {TodoInput} from '../components/TodoInput'
export function Home(){
    return (
        <View style={style.container}>
           <Header/>
           <TodoInput/>
           <TasksList/>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'#B2B2B2',
    }
})

