import React from 'react';
import { Image, View } from 'react-native';
import supergasbras from './../../../assets/supergasbras.png'
import sempregas from './../../../assets/sempregas.png'
import { styles } from './styles'

export const BannerHome = () => {
    return (

        <View style={styles.container}>
    <Image source={supergasbras} style={styles.mainLogo}/>
    <Image source={sempregas} style={styles.logo}/>
</View>
)}