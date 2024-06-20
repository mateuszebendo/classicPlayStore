import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Games from './src/screens/Games';
import Aplicativos from './src/screens/Aplicativos';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        translucent={false}
      />
      <Stack.Navigator initialRouteName='Aplicativos'>
        <Stack.Screen name='Aplicativos' component={Aplicativos}
          options={{ headerShown: false }} />
        <Stack.Screen name='Games' component={Games}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
})