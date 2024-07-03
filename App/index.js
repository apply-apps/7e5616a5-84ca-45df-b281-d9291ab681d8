// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TaleList">
                <Stack.Screen name="TaleList" component={TaleList} options={{ title: 'Tales for Kids' }} />
                <Stack.Screen name="TaleDetails" component={TaleDetails} options={{ title: 'Tale Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const tales = [
    { id: '1', title: 'The Tortoise and the Hare' },
    { id: '2', title: 'The Boy Who Cried Wolf' },
    { id: '3', title: 'The Ant and the Grasshopper' },
];

const TaleList = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Select a Tale</Text>
            {tales.map((tale) => (
                <TouchableOpacity
                    key={tale.id}
                    style={styles.button}
                    onPress={() => navigation.navigate('TaleDetails', { taleId: tale.id })}
                >
                    <Text style={styles.buttonText}>{tale.title}</Text>
                </TouchableOpacity>
            ))}
        </SafeAreaView>
    );
};

const taleDetails = {
    '1': {
        title: 'The Tortoise and the Hare',
        content: 'There once was a speedy Hare who bragged about how fast he could run...',
        imageUrl: 'https://picsum.photos/200/300?random=1',
    },
    '2': {
        title: 'The Boy Who Cried Wolf',
        content: 'A young shepherd boy was bored watching the village sheep grazing on the hills...',
        imageUrl: 'https://picsum.photos/200/300?random=2',
    },
    '3': {
        title: 'The Ant and the Grasshopper',
        content: 'In a field one summer’s day a Grasshopper was hopping about, chirping and singing...',
        imageUrl: 'https://picsum.photos/200/300?random=3',
    },
};

const TaleDetails = ({ route }) => {
    const { taleId } = route.params;
    const tale = taleDetails[taleId];

    return (
        <SafeAreaView style={styles.detailsContainer}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>{tale.title}</Text>
                <Image source={{ uri: tale.imageUrl }} style={styles.image} />
                <Text style={styles.content}>{tale.content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#CE8ABD',
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    detailsContainer: {
        flex: 1,
        marginTop: 20,
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    content: {
        fontSize: 16,
        textAlign: 'justify',
    },
});

export default App;