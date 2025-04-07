import 'react-native-get-random-values'; // Import the polyfill
import { StyleSheet, Text, View, Platform} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import {Provider} from "react-redux";
import {store} from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import {SafeAreaProvider} from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Correct import

//Set up Redux
export default function App() {

  const Stack = createNativeStackNavigator(); // Correct function
 
  return (
    <Provider store={store}>
        <NavigationContainer>
        <SafeAreaProvider>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? 'padding' : 'height'}
         style={{flex:1}}
        keyboardVerticalOffset={Platform.OS === 'ios'? -64: 0}
          >
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" 
            component={HomeScreen}
            options={{
              headerShown: false,
              }}
            
            />
             <Stack.Screen name="MapScreen" 
            component={MapScreen}
            options={{
            headerShown: false,
            }}
            
            />
      </Stack.Navigator>
        </KeyboardAvoidingView>
         
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
