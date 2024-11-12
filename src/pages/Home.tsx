import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Banner } from '../components/Banner';
import { Measurer } from '../components/Measurer';
import { Stats } from '../components/Stats';
import { Navbar } from '../components/Navbar';

export const Home = () => {
    return(
    <View style={{flex: 1}}>
        <Banner />
        <Measurer />
        <Stats />
        <Navbar />
    </View>

)}
