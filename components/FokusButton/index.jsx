import { Pressable, Text, StyleSheet } from "react-native"

export const FokusButton = ({ onPress, title, icon }) => {
    return(
        <Pressable style={styles.button} onPress={onPress}>
            {icon}
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#B872FF',
        borderRadius: 10,
        padding: 32,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#021123',
        fontSize: 18,
        fontWeight: 'bold'
    }
})