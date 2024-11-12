import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d13002',
        height: 210,
        width: '100%',
        position: 'absolute',
        bottom: 80,
        gap: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    upperText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },

    textSmall: {
        fontSize: 14,
    },

    numberBig: {
        fontSize: 50,
    },

    percentage: {
        fontSize: 30,
    },

    containerBottom: {
        height: 120,
        padding: 15,
        width: '92%',
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'space-between',
    },

    line: {
        width: '100%',
        height: 2,
        backgroundColor: '#888',

    },

    bottomTextCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    bottomFadeText: {
        fontSize: 14,
        color: '#888'
    },

    bottomBoldText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
})