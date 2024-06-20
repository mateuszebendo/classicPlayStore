import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import Body from './src/components/Body';

export default function App() {
  return (
    <NavigationContainer>
       <StatusBar
        translucent={false}
      />
      <View>
        <Header/>
        <Body/>
      </View>
    </NavigationContainer>
  );
}

