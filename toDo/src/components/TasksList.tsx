import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export function TasksList(){
    return (
        <View style={style.container}>
            <Text>Lista de tarefas!</Text>
        </View>
    )
} 

const style = StyleSheet.create({
    container:{
       marginTop:60
    }
})