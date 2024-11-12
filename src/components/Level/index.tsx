import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { Gyroscope } from 'expo-sensors';
import Svg, { Path } from 'react-native-svg';
import { styles } from './style'
import { useMyContext } from '../../context/MyContext';

const { width, height } = Dimensions.get('window');
const AnimatedPath = Animated.createAnimatedComponent(Path);

export const Level = () => {
    const { gasVolume } = useMyContext();
    const [rotation, setRotation] = useState(0);
    const tiltX = useState(new Animated.Value(0))[0];

    useEffect(() => {
        const subscription = Gyroscope.addListener((data) => {
            setRotation(data.y);
        });

        Gyroscope.setUpdateInterval(100);

        return () => subscription.remove();
    }, []);

    useEffect(() => {
        const sensitivity = 30;


        Animated.timing(tiltX, {
            toValue: rotation * sensitivity,
            duration: 100,
            useNativeDriver: false,
        }).start();
    }, [rotation]);

    const wavePath = (offset: number): string => `
      M 0,${height / 2}
      Q ${width / 4},${height / 2 + offset} ${width / 2},${height / 2}
      T ${width},${height / 2}
      L ${width},${height}
      L 0,${height}
      Z
    `;


    const animatedPath = tiltX.interpolate({
        inputRange: [-100, 100],
        outputRange: [-50, 50],
        extrapolate: 'clamp',
    });

    // , {marginBottom: `${-(100-gasVolume)}%`}

    return (
        <Animated.View style={[styles.container]}>
            <Svg height={height} width={width}>
                <AnimatedPath
                    d={animatedPath.interpolate({
                        inputRange: [-50, 50],
                        outputRange: [
                            wavePath(-50),
                            wavePath(50),
                        ],
                    })}
                    fill="#d13002"
                />
            </Svg>
        </Animated.View>
    );
};