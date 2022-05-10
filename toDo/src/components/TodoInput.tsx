import React,{useState} from 'react'
import {View,TextInput,StyleSheet,TouchableOpacity, Text,Appearance} from 'react-native'
export function TodoInput(){

    const [mySkills,setSkills] = useState<String[]>([])
    const [mySkill,setSkill] = useState<String>('')

    function handleNewSkill(){
        if(mySkill){
            setSkills(oldState => [...oldState,mySkill])
        }
        console.log(mySkills)
    }
    return (
        <View style={style.container}>
             <View style={style.containerInputItens}>
                <TextInput 
                    placeholder='Adicione uma tarefa'
                    onChangeText={setSkill}
                    placeholderTextColor={Appearance.getColorScheme() === 'dark' ? '#fff' : '#B2B2B2'}/>
             </View>
             <View style={style.styleButton}>
                <TouchableOpacity onPress={handleNewSkill}>
                    <Text style={style.styleTitle}>></Text>
                </TouchableOpacity>   
             </View>
        </View>
        
       
    )
}


const style = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#fff',
        position:'absolute',
        borderRadius:7,
        top:90,
        right:50,
        padding:2
    },
    containerInputItens:{
        backgroundColor:'#fff',
        color:'#fff',
        flexDirection:'row',
        width:'60%',
    },
    styleButton:{
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        borderLeftWidth:1,
        borderLeftColor:'#EBEBEB'
    },
    styleTitle:{
        marginLeft:30,
        textAlign:'center',
        fontSize:30,
        color:`${Appearance.getColorScheme() === 'dark' ? '#fff' : '#B2B2B2'}`
   }
    
})