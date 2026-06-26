import { Text, View, StyleSheet } from "react-native";

export const ViewFooter = ({}) => {
    return(
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                Projeto fictício e sem fins comerciais. Desenvolvido por Isabella F.G.S.
            </Text>
        </View>
    )
} 

const styles = StyleSheet.create({
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
})