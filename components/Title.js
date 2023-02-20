import { Text, StyleSheet } from "react-native"
import Colors from "../constants/colors"
export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}
const styles=StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
        color: Colors.accent500,
        borderWidth:2,
        borderColor:Colors.accent500,
        padding:12
    }
})
