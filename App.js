import { StyleSheet, View, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber]=useState();
  const [gameOver, setGameOver] = useState(true);
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameOver(false);
  }
  function gameOverHandler(){
    setGameOver(true);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;
  if(userNumber){ //If the there is a number that the user has entered redirect it to gamescreen otherwise startgamescreen
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if(gameOver && userNumber){
    screen = <GameOverScreen/>
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]}style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.png')} 
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    rootScreen:{
      flex:1
    },
    backgroundImage:{
      opacity:0.15
    }
});
