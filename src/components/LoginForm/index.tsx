import React, { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './styles'
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'
import google from './../../../assets/google.png'

export const LoginForm = () => {
    const [texto, setTexto] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [checked, setChecked] = React.useState(false)
    const [isFormValid, setIsFormValid] = React.useState(false)
    const [showPass, setShowPass] = React.useState(false)


    const handleTextChange = (text: string) => {
        setTexto(text)
    }

    const handlePassChange = (pass: string) => {
        setSenha(pass)
    }

    const handlePassVisibility = () => {
        setShowPass(!showPass)
    }

    useEffect(() => {
        (texto.length > 10 && senha.length > 6) ? setIsFormValid(true) : setIsFormValid(false)
    }, [texto, senha])

    return (
        <View>
            <Text style={styles.inputText}>CPF</Text>
            <TextInput
                style={styles.input}
                placeholder={'Digite seu CPF'}
                onChangeText={handleTextChange}
                value={texto}
                keyboardType='number-pad'
            />
            <Text style={styles.inputText}>Senha</Text>
            <View style={styles.passContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={'Digite sua senha'}
                    onChangeText={handlePassChange}
                    value={senha}
                    secureTextEntry={!showPass}
                    maxLength={11}
                />
                <TouchableOpacity onPress={handlePassVisibility} style={styles.passVisibility}>
                    <Icon
                        name={showPass ? 'visibility' : 'visibility-off'}
                        size={30}
                        color='#d8dbe0'
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.checkboxRow}>
                <View style={styles.checkbox}>
                    <Checkbox
                        color='#d13002'
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => setChecked(!checked)}
                    />
                    <Text>Lembrar CPF</Text>
                </View>
                <Text>Esqueceu a senha?</Text>
            </View>

            <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.button, isFormValid ? styles.buttonEnabled : styles.buttonDisabled]}>
                <Text style={[styles.buttonText, isFormValid ? styles.buttonTextEnabled : styles.buttonTextDisabled]}>Seguinte</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
                <View style={styles.line} />
                <Text>ou</Text>
                <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleButton}>
                <View style={styles.googleContainer}>
                    <Image
                        source={google}
                        style={styles.googleImg}
                    />
                    <Text style={styles.googleText}>Continuar com Google</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.semConta}>
                <Text style={styles.semContaText}>Não possui conta?</Text>
                <Text style={styles.semContaText}>Cadastrar</Text>
            </View>
        </View>
    )
}