import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles.js'

import  Logo  from '../../components/Logo/index.js'
import { useState } from 'react'

export default function Home(){
    const [inputValue, SetInputValue] = useState('')

    function handleSearch(){
        console.log('Clicou')
    }

    return(
        <SafeAreaView style={styles.container}>
            <Logo/>

            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com você</Text>

            <View style={styles.form}>
                <TextInput
                placeholder='Digite o nome da comida...'
                style={styles.input}
                />

                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name='search' size={28} color="#4cbe6c"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}



