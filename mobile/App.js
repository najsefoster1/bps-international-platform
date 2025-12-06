import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScren from './screens/HomeScreen';
import UploadScreen from './screens/UploadScreen';
import RecipientScreen from './screens/RecipientScreen';
import ReviewScreen from './screens/ReviewScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import TrackingScreen from './screens/TrackingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
        <Stack.Screen name="Recipient" component={RecipientScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Tracking" component={TrackingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
