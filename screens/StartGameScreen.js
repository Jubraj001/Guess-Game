import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native"
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({onPickNumber}) {
  const [enteredNumber,setEnteredNumber]=useState('');

  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
  }

  function resetInputHandler(){
    setEnteredNumber("");
  }

  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);
    if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
        Alert.alert('Invalid Number!',
        'Number has to be a number between 1 to 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
        return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
    <Title>Guess my Number</Title>
      <Card>
          <InstructionText>Enter a number</InstructionText>
          <TextInput 
              style={styles.numberInput} 
              maxLength={2} 
              keyboardType="number-pad" 
              autoCapitalize="none" 
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}/>
              <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                  </View>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                  </View>
              </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    rootContainer:{
      flex:1,
      marginTop: 100,
      alignItems: 'center'
    },
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
});
