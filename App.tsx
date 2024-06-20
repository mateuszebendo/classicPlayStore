import { View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import Body from './src/components/Body';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar
          translucent={false}
        />
        <View style={styles.main}>
          <Header />
          <Body />
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }, 
  main: {
    flex: 1
  }
})