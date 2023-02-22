import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";

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
    const [guessRounds,setGuessRounds]=useState([initialGuess]);

    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    },[currentGuess,userNumber,onGameOver])

    useEffect(()=>{
        minBoundary=1;
        maxBoundary=100;
    },[])
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
        setGuessRounds((prevGuessRounds=>[newNumber,...prevGuessRounds])); //Setting the logs of all the guesses
    }

    const guessRoundsListLength=guessRounds.length;
    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                            <Ionicons name="md-remove" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                        <Ionicons name="md-add" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList data={guessRounds} renderItem={(itemData)=><GuessLogItem roundItem={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
                keyExtractor={(item)=>item}/>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:40
    },
    instructionText:{
        marginBottom:12
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
        color: '#ddb52f',
        borderWidth:2,
        borderColor:'#ddb52f',
        padding:12
    },
    buttonsContainer:{
        flexDirection:'row' //buttons will appear side by side
    },
    buttonContainer:{
        flex:1 //both buttons will take the exact amount of space
    },
    listContainer:{
        flex:1,
        padding:16
    }
})
