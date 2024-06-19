import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <Header/>
      </View>
    </NavigationContainer>
  );
}

