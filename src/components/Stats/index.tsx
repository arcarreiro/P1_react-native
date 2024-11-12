import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { useMyContext } from '../../context/MyContext'

export const Stats = () => {
    const [gasKg, setGasKg] = React.useState<number>(0)
    const { gasVolume, setGasVolume } = useMyContext()

    useEffect(() => {
        setGasKg(3.452)
    }, [])

    useEffect(() => {
        const percentual = (gasKg/13)*100
        setGasVolume(percentual)
    }, [gasKg])

    return (
        <View style={styles.container}>
            <View style={styles.upperText}>
                <Text style={styles.textSmall}>Restam</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.numberBig}>{gasVolume.toFixed(0)}</Text>
                    <Text style={styles.percentage}>%</Text>
                </View>
                <Text style={styles.textSmall}>de gás do botijão</Text>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.bottomTextCont}>
                    <Text style={styles.bottomFadeText}>Consumo de gás</Text>
                    <Text style={styles.bottomBoldText}>{gasKg.toFixed(3)}kg</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.bottomTextCont}>
                    <Text style={styles.bottomFadeText}>Estimativa para o fim</Text>
                    <Text style={styles.bottomBoldText}>Agende sua troca</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.bottomTextCont}>
                    <Text style={styles.bottomFadeText}>Última atualização</Text>
                    <Text style={styles.bottomBoldText}>10/11 às 15:11h</Text>
                </View>
            </View>
        </View>
    )
}