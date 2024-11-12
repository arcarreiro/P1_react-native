import React from 'react';
import { View } from 'react-native';
import { Banner } from '../components/Banner';
import { Measurer } from '../components/Measurer';
import { Navbar } from '../components/Navbar';
import { Stats } from '../components/Stats';

export const Home = () => {
    return(
    <View style={{flex: 1}}>
        <Banner />
        <Measurer />
        <Stats />
        <Navbar />
    </View>

)}
