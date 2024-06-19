import {View, StyleSheet, TextInput} from 'react-native'
import menuIcon from '../assets/menuIcon.png'

const Header = () =>{
    return(
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            inlineImageLeft='../assets/menuIcon.png'
            placeholder='Google Play'
            />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: "center",
        padding: 10,
        width: "100%", 
        aspectRatio: 3,
        backgroundColor: "#109d58"
    },
    input: { 
        padding: 10,
        backgroundColor: '#fff'
    }
});