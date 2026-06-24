import { Pressable, Text, StyleSheet } from "react-native"

export const FokusButton = () => {
    return(
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#B872FF',
        borderRadius: 10,
        padding: 32
    },
    buttonText: {
        textAlign: 'center',
        color: '#021123',
        fontSize: 18,
        fontWeight: 'bold'
    }
})