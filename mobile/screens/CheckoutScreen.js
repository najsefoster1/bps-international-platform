import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { images = [], inmateName, inmateId, facility } = route.params || {};
  const totalCredits = images.length;

  const handleComplete = () => {
    navigation.navigate('Tracking', { images, inmateName, inmateId, facility });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Checkout</Text>
      <Text style={styles.label}>Total Credits Required: {totalCredits}</Text>
      <Button title="Complete Order" onPress={handleComplete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default CheckoutScreen;
