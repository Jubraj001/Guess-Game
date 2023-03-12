import { StyleSheet,View,Dimensions } from "react-native"
import Colors from "../../constants/colors"
export default function Card({children}) {
  return (
    <View style={styles.inputContainer}>{children}</View>
  )
}
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer:{
        padding:16,
        alignItems:'center',
        marginTop:deviceWidth < 380 ? 12 : 24,
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
