import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
export default function GameScreen() {
    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* Guess */}
            <View>
                <Text>Higher or Lower?</Text>
                {/* + - */}
            </View>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:24
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
