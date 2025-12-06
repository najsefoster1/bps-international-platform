import React, { useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadScreen({ navigation }) {
  const [photos, setPhotos] = useState([]);

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true
    });
    if (!result.canceled) {
      setPhotos(result.assets);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Upload Photos</Text>
      <Button title="Select from Gallery" onPress={pickImages} />
      <Text style={{ marginTop: 16 }}>{photos.length} photo(s) selected.</Text>
      <Button title="Next" onPress={() => navigation.navigate('Recipient')} disabled={photos.length === 0} />
    </View>
  );
}
