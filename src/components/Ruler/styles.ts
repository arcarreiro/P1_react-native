import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 12,
    },

    line: {
        height: 3,
        width: 10,
        backgroundColor: 'black',
    },

    rulerComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    container: {
        flexDirection: 'column-reverse',
        right: 0,
        position: 'absolute',
        alignItems: 'flex-end',
        gap: 12,
        marginTop: 15,
        zIndex: 1
    }
})