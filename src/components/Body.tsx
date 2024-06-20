import { View, StyleSheet, FlatList } from "react-native";
import Botao from "./Botao";

const data: string[] = ['populares', 'categorias', 'recomendados', 'familia', 'novidades']

const Body = () => {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                horizontal
                data={data}
                renderItem={({ item }) => {
                return <Botao texto={item} />}}
                keyExtractor={(item) => item}
            />
        </View>);
}

export default Body

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    flatList: {
        width: '100%',
        aspectRatio: 1
    }
});