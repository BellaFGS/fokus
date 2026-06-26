import { Link } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { ViewFooter } from "../components/Footer/";

export default function Index () {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <View>
        <Text style={styles.title}>
          Otimize sua {'\n'}produtividade,{'\n'} 
          <Text style={styles.bold}>
            mergulhe no que {'\n'}importa
          </Text>
        </Text>
        <Image source={require('../assets/images/home.png')} />
        <FokusButton title="Quero iniciar!" />
      </View>
      <ViewFooter/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#021123',
      gap: 40,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 26
  },
  bold: {
    fontWeight: 'bold'
  }
})