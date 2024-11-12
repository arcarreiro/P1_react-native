import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Gyroscope } from 'expo-sensors';
import { styles } from './style'
export const Level = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const tiltX = new Animated.Value(0);
    const tiltY = new Animated.Value(0);

    useEffect(() => {
        // Configura a assinatura do giroscópio
        const subscription = Gyroscope.addListener((data) => {
            setRotation({ x: data.x, y: data.y });
        });

        // Configura o intervalo de atualizações
        Gyroscope.setUpdateInterval(100); // Atualiza a cada 100ms

        return () => subscription.remove();
    }, []);

    useEffect(() => {
        // Amplificação e suavização da animação
        const sensitivity = 20;

        Animated.timing(tiltX, {
            toValue: rotation.x * sensitivity,
            duration: 100,
            useNativeDriver: true,
        }).start();

        Animated.timing(tiltY, {
            toValue: rotation.y * sensitivity,
            duration: 100,
            useNativeDriver: true,
        }).start();
    }, [rotation]);

    // Limita os valores do giroscópio a um ângulo máximo de 45°
    const tiltXInterpolated = tiltX.interpolate({
        inputRange: [-45, 45],
        outputRange: ['-45deg', '45deg'],
        extrapolate: 'clamp',
    });

    const tiltYInterpolated = tiltY.interpolate({
        inputRange: [-45, 45],
        outputRange: ['-45deg', '45deg'],
        extrapolate: 'clamp',
    });

    return (

        // <View style={styles.gasLevel}/>
        // <View style={[styles.gasLevel, {height: '50%' }]}></View>
        <Animated.View
            style={[
                styles.gasLevel,
                {
                    transform: [
                        { rotateX: tiltXInterpolated },
                        { rotateY: tiltYInterpolated },
                    ],
                },
            ]}
        />

    )
};