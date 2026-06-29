import { View, Image, StyleSheet } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton";
import { IconPlay, IconPause } from "../components/Icons";
import { Timer } from "../components/Timer";
import { ViewFooter } from "../components/Footer/";
import { usePomodoroTimer } from "../components/Functions";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('../assets/images/pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: require('../assets/images/short.png'),
    display: 'Pausa Curta'
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: require('../assets/images/long.png'),
    display: 'Pausa Longa'
  }
]

export default function Pomodoro() {
  // Funções
  const { timerType, seconds, timerRunning, toggleTimerType, toggleTimer } = usePomodoroTimer(pomodoro[0]);

  return (
    <View style={styles.container}>
      <Image source={timerType.image}></Image>
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton 
              key={p.id} 
              active={timerType.id === p.id} 
              onPress={() => toggleTimerType(p)} 
              display={p.display} 
            />
          ))}
        </View>
        <Timer totalSeconds={seconds} />
        <FokusButton 
          title={timerRunning ? 'Pausar' : 'Começar'}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer} 
        />
      </View>
      <ViewFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32

  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})