import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecipientScreen = () => {
    const [inmateName, setInmateName] = useState('');
    const [inmateId, setInmateId] = useState('');
    const [facility, setFacility] = useState('');
    const navigation = useNavigation();

    const handleNext = () => {
        navigation.navigate('Review', { inmateName, inmateId, facility });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Recipient</Text>
            <TextInput
                style={styles.input}
                placeholder="Inmate Name"
                value={inmateName}
                onChangeText={setInmateName}
            />
            <TextInput
                style={styles.input}
                placeholder="Inmate ID"
                value={inmateId}
                onChangeText={setInmateId}
            />
            <TextInput
                style={styles.input}
                placeholder="Facility"
                value={facility}
                onChangeText={setFacility}
            />
            <Button title="Next" onPress={handleNext} disabled={!inmateName || !inmateId || !facility} />
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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default RecipientScreen;
