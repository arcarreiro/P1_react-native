import React from 'react';
import { BannerHome } from '../components/BannerHome';
import { LoginForm } from '../components/LoginForm';
import { View } from 'react-native';

export const Login = () => {
    return (
        <View>
        <BannerHome />
        <LoginForm />
        </View>
)}