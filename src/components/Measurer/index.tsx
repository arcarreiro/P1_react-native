import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Ruler } from './../Ruler'
import { styles } from './styles'
import { useMyContext } from '../../context/MyContext'
import { Level } from '../Level'

export const Measurer = () => {
    const {gasVolume, setGasVolume} = useMyContext();
    const [altura, setAltura] = React.useState(0);

    useEffect (() => {
        setAltura(gasVolume)

    }, [gasVolume])

    return (
        <View style={styles.container}>
            <Ruler />
            <Level />
            {/* <View style={[styles.gasLevel, {height: `${altura}%` }]}/> */}
        </View>
    )
}