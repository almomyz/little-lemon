import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/Onboarding.js';
import Profile from './screens/Profile.js'; 
import AsyncStorage from '@react-native-async-storage/async-storage';4
import React from 'react';
import { useFonts } from 'expo-font';
const Stack = createNativeStackNavigator();

async function isUserLoggedIn() {
  const userToken = await AsyncStorage.getItem('IsLogin');
  return !!userToken;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Karla-Regularr':require('./assets/fonts/Karla-Regular.ttf')
  });
  React.useEffect(() => {
    const checkLogin = async () => {
      const isLoggedIn = await isUserLoggedIn();
      console.log
      setIsLoggedIn(isLoggedIn);
    };

    checkLogin();
  }, []);

  if (isLoggedIn) {
    // User is logged in, navigate to the main screen
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    // User is not logged in, show the onboarding screen
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;