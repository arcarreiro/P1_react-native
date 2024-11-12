import { StyleSheet } from 'react-native'


// const { gasVolume } = useMyContext();
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 290,
        zIndex: 2,
    },
    gasLevel: {
        width: '100%',
        backgroundColor: '#d13002',
        position: 'absolute',
        bottom: 0,
        left: 0
    },

    gauge: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})