import { View, StyleSheet, Text, FlatList, ScrollView, SectionList } from "react-native";
import { games, gamesRecomendados } from '../data/games';
import Botao from "./Botao";
import Card from "./Card";

const data: string[] = ['populares', 'categorias', 'recomendados', 'familia', 'novidades']

const Body = () => {
    return (
        <ScrollView style={styles.container}>
            <FlatList
                style={styles.flatList}
                horizontal
                data={data}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Botao texto={item} />}
                contentContainerStyle={{ gap: 10 }}
            />
            <View style={styles.titulo}>
                <Text style={styles.texto}>Jogos + atualizados: </Text>
                <Text style={styles.link}>MAIS</Text>
            </View>
            <FlatList
                style={styles.flatList}
                horizontal
                data={games}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <Card app={item} />}
                contentContainerStyle={{ gap: 20 }}
            />
            <View style={styles.titulo}>
                <Text style={styles.texto}>Jogos recomendados: </Text>
                <Text style={styles.link}>MAIS</Text>
            </View>
            <FlatList
                style={styles.flatList}
                horizontal
                data={gamesRecomendados}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <Card app={item} />}
                contentContainerStyle={{ gap: 20 }}
            />

        </ScrollView>);
}

export default Body

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        backgroundColor: '#eeeeee'
    },
    categorias: {
        flex: 1,
    },
    flatList: {
        flexDirection: 'row'
    },
    titulo: {
        flex: 0,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    link: {
        fontSize: 20,
        color: '#40805e',
        fontWeight: 'bold'
    }
});