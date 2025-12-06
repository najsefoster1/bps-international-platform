import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TrackingScreen = () => {
  const route = useRoute();
  const { images = [], inmateName, inmateId, facility } = route.params || {};

  const statuses = [
    'Order Received',
    'Compliance Review',
    'Printing',
    'Preparing for Mailing',
    'Shipped',
    'Delivered',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Tracking</Text>
      {statuses.map((status, index) => (
        <Text key={index} style={styles.status}>
          {index + 1}. {status}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  status: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default TrackingScreen;
