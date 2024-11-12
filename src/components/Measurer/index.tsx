import React from 'react'
import { Text, View } from 'react-native'
import { Ruler } from './../Ruler'
import { styles } from './styles'
import { useMyContext } from '../../context/MyContext'



export const Measurer = () => {
    const {gasVolume, setGasVolume} = useMyContext();
    // {height: gasVolume}
    return (
        <View>
            <View style={[styles.gauge]}/>
            <Ruler />
        </View>
    )
}