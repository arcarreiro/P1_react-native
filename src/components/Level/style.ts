import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    overflow: 'hidden',
},
      gasLevel: {
        width: '100%',
        height: '40%', // Ajuste isso conforme o nível atual do gás
        // backgroundColor: '#d13002',
        backgroundColor: 'blue',
        position: 'absolute',
        bottom: 0,
        left: 0,
      },
})