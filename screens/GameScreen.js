import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomNumber(min,max,exclude) // random number generator except for the number that is given by the user
{
    const rndNum = Math.floor(Math.random()*(max-min)) + min;

    if(rndNum==exclude){
        return generateRandomNumber(min,max,exclude);
    }
    else {return rndNum;}
}
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomNumber(1,100,userNumber);
    const [currentGuess,setCurrentGuess]=useState(initialGuess);

    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver();
        }
    },[currentGuess,userNumber,onGameOver])

    function nextGuessHandler(direction){
        if((direction==='lower' && currentGuess<userNumber) || (direction==='greater' && currentGuess>userNumber)){
            Alert.alert("Don't lie!","You know that this is wrong...",[{text: 'Sorry!', style:'cancel'}])
            return;
        }
        if(direction=='lower'){
            maxBoundary=currentGuess;
        }
        else{
            minBoundary=currentGuess+1;
        }
        const newNumber = generateRandomNumber(minBoundary,maxBoundary, currentGuess);
        setCurrentGuess(newNumber);
    }
    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText>Higher or Lower?</InstructionText>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
                </View>
            </Card>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:40
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
        color: '#ddb52f',
        borderWidth:2,
        borderColor:'#ddb52f',
        padding:12
    }
})
