import { View, Text, StyleSheet } from "react-native";

export default function GameScreen() {
    return(
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
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
        padding:40
    }
})
