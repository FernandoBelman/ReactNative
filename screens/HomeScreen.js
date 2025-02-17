import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ViewShot from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import Card from '../components/Card';

const HomeScreen = () => {
  const [message, setMessage] = useState('');
  const [background, setBackground] = useState(require('../assets/background1.jpeg'));
  const [emoji, setEmoji] = useState('');
  const viewShotRef = useRef();

  const backgrounds = [
    require('../assets/background1.jpeg'),
    require('../assets/background2.jpeg'),
  ];

  const emojis = ['❤️', '😍', '💌', '🌹'];

  const removeEmoji = () => {
    setEmoji('');
  };

  // Captura la imagen con ViewShot y la devuelve como URI
  const captureImage = async () => {
    try {
      if (viewShotRef.current) {
        return await viewShotRef.current.capture();
      }
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
    return null;
  };

  // Función para compartir la imagen capturada
  const shareCard = async () => {
    try {
      const uri = await captureImage();
      if (!uri) return;

      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        alert('Compartir no está disponible en este dispositivo');
        return;
      }

      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error('Error al compartir la tarjeta:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 0.9 }}>
          <Card message={message} background={background} emoji={emoji} />
        </ViewShot>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu mensaje"
          value={message}
          onChangeText={setMessage}
        />

        <View style={styles.backgroundSelector}>
          {backgrounds.map((bg, index) => (
            <TouchableOpacity key={index} onPress={() => setBackground(bg)}>
              <ImageBackground source={bg} style={styles.backgroundOption} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.emojiSelector}>
          {emojis.map((em, index) => (
            <TouchableOpacity key={index} onPress={() => setEmoji(em)}>
              <Text style={styles.emoji}>{em}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity onPress={removeEmoji} style={styles.trashButton}>
          <Text style={styles.emoji}>🗑️</Text>
        </TouchableOpacity>

        
        <Button title="Compartir Tarjeta" onPress={shareCard} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffafcc',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  backgroundSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  backgroundOption: {
    width: 100,
    height: 100,
  },
  emojiSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  emoji: {
    fontSize: 30,
  },
  trashButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
