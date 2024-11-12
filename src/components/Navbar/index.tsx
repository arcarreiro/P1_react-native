import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const Navbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line}>
                <View style={styles.buttonColumn}>
                    <TouchableOpacity style={styles.selectedButton}>
                        <Icon
                            name={'home'}
                            size={25}
                            color='#fff'
                        />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Home</Text>
                </View>
                <View style={styles.buttonColumn}>
                    <TouchableOpacity style={styles.button}>
                        <Icon
                            name={'attach-money'}
                            size={25}
                            color='black'
                        />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Boletos</Text>
                </View>
                <View style={styles.buttonColumn}>
                    <TouchableOpacity style={styles.buttonAttach}>
                        <Icon
                            name={'calendar-month'}
                            size={25}
                            color='black'
                        />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Agendar</Text>
                </View>
                <View style={styles.buttonColumn}>
                    <TouchableOpacity style={styles.button}>
                        <Icon
                            name={'insert-chart-outlined'}
                            size={25}
                            color='black'
                        />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Consumo</Text>
                </View>
                <View style={styles.buttonColumn}>
                    <TouchableOpacity style={styles.button}>
                        <Icon
                            name={'manage-accounts'}
                            size={25}
                            color='black'
                        />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Perfil</Text>
                </View>
            </View>
        </View>
    )
}