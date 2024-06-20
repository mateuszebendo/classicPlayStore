import { Text, Pressable, StyleSheet } from "react-native";

const Categories = ({ texto }: { texto: string }) => {
    return (
      <Pressable style={styles.container}>
        <Text style={styles.texto}>{texto}</Text>
      </Pressable>
    );
  };

export default Categories; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  texto: {
    color: '#c0c0c0', 
    fontSize: 20
  }
});