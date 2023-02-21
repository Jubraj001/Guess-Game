import { StyleSheet,View } from "react-native"
import Colors from "../../constants/colors"
export default function Card({children}) {
  return (
    <View style={styles.inputContainer}>{children}</View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        padding:16,
        alignItems:'center',
        marginTop:36,
        backgroundColor: Colors.primary800,
        marginHorizontal:24,
        borderRadius:8,
        elevation: 100,
        shadowColor:'black',
        shadowOffset:{width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25 
    }
})
