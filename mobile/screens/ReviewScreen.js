import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ReviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { images = [], image, inmateName, inmateId, facility } = route.params || {};
  const photoUris = images && images.length ? images : image ? [image] : [];

  const handleCheckout = () => {
    navigation.navigate('Checkout', { images: photoUris, inmateName, inmateId, facility });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Review Order</Text>
      <Text style={styles.label}>Recipient: {inmateName} (ID: {inmateId})</Text>
      <Text style={styles.label}>Facility: {facility}</Text>
      {photoUris.map((uri, index) => (
        <Image key={index} source={{ uri }} style={styles.image} />
      ))}
      <Text style={styles.label}>Total Credits: {photoUris.length}</Text>
      <Button title="Proceed to Checkout" onPress={handleCheckout} disabled={!photoUris.length} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});

export default ReviewScreen;
