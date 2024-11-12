import React from "react";
import { Image, View } from "react-native"
import sempregas from './../../../assets/sempregas.png'
import { styles } from './styles'

export const Banner = () => {
    return (
        <View>
            <Image
            source={sempregas}
            style={styles.bannerImg}
            />
        </View>
    )
}