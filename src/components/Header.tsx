import { View, StyleSheet, TextInput, FlatList } from 'react-native'
import Categories from './Categories';

const categorias: string[] = ['APPS', 'GAMES', 'FILMES & TV', 'LIVROS'];

const Header = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Google Play'
            />
            <FlatList
                style={styles.categorias}
                data={categorias}
                horizontal
                renderItem={({ item }) => <Categories texto={item} />}
                keyExtractor={(item) => item}
                contentContainerStyle={{ gap: 30 }}
            />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'space-between',
        padding: 15,
        width: "100%",
        aspectRatio: 3,
        backgroundColor: "#109d58"
    },
    input: {
        padding: 10,
        backgroundColor: '#fff'
    },
    categorias: {
    }
});