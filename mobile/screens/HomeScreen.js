import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Send love. We'll handle the rest.</Text>
      <Button title="Upload Photos" onPress={() => navigation.navigate('Upload')} />
    </View>
  );
}
