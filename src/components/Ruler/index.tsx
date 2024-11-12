import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export const Ruler = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rulerComponent}><Text style={styles.text}>0kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>1kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>2kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>3kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>4kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>5kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>6kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>7kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>8kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>9kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>10kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>11kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>12kg</Text><View style={styles.line}/></View>
            <View style={styles.rulerComponent}><Text style={styles.text}>13kg</Text><View style={styles.line}/></View>
        </View>
    )
}