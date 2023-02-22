import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"
export default function GuessLogItem({roundItem, guess}) {
  return (
    <View style={styles.listItem}>
        <Text>#{roundItem}</Text>
        <Text>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem:{
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        background: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset:{width: 0, height:0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText:{
        fontFamily: 'open-sans'
    }
})