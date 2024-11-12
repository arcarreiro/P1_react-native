import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    line: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    selectedButton: {
        backgroundColor: '#d13002',
        height: 35,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },

    button: {
        backgroundColor: '#fff',
        width: 70,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonAttach: {
        marginTop: -35,
        backgroundColor: '#d13002',
        height: 70,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },

    buttonColumn: {
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
})