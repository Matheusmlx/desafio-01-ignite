import React from 'react'
import {View,Text,StyleSheet,StatusBar} from 'react-native'


export function Header(){
    return (
        <>
        <StatusBar 
            backgroundColor="#8257E5"
            animated={true}
        />
        <View style={styles.container}>
            <Text style={styles.title}>to.do</Text>
            <Text>Você tem <Text style={{fontWeight:'bold'}}>3 tarefas</Text></Text>
        </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#8257E5',
        height:'15%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:20
    },
    title:{
        fontSize:35,
        color:'#FFF',
        fontWeight:'bold'
    }
})
