import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        height: 60,
        width: 300,
        margin: 30,
        borderWidth: 1,
        borderRadius: 10,
        padding: 18,
        fontSize: 16,
    },

    inputText: {
        marginBottom: -30,
        marginLeft: 30,
        fontSize: 12,
        color: '#888',
    },

    passVisibility: {
        position: 'absolute',
        right: 45,
        top: '48%',
        transform: [{ translateY: -12 }],
    },

    passContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    checkboxRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginRight: 30,
        marginLeft: 23,
    },

    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    button: {
        height: 50,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },

    buttonText: {
        fontSize: 16,
    },

    buttonEnabled: {
        backgroundColor: '#d13002',
    },

    buttonTextEnabled: {
        color: '#fff'
    },

    buttonDisabled: {
        backgroundColor: '#d8dbe0',
    },

    buttonTextDisabled: {
        color: '#888'
    },

    divider: {
        flexDirection: 'row',
        marginRight: 30,
        marginLeft: 30,
        gap: 15,
        alignItems: 'center',
        marginTop: -10
    },

    line: {
        backgroundColor: '#d7d4da',
        height: 3,
        width: 128,
    },

    googleImg: {
        resizeMode: 'contain',
        width: 30,
    },

    googleButton: {
        backgroundColor: '#f5f5f5',
        margin: 30,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
    },

    googleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 35,
        marginLeft: 15
    },

    googleText: {
        fontSize: 20,
        color: 'black'
    },

    semConta: {
        alignItems: 'center',
        gap: 5
    },

    semContaText: {
        fontSize: 16,
        color: 'black',
    },
})

