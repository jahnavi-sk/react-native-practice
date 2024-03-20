import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableNativeFeedbackBase, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'


import OnboardingScreen from './Components/Onboarding';

const AppStack= createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">

        <AppStack.Screen name="Onboarding" component={OnboardingScreen}></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



