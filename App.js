import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { CheckBox, Button } from '@rneui/themed';

const pokemons = [
  { id: '1', name: 'Snorlax', image: require('./assets/pokemon1.png'), stats: { HP: 160, Ataque: 110, Defensa: 65, Velocidad: 30 } },
  { id: '2', name: 'Gengar', image: require('./assets/pokemon2.png'), stats: { HP: 60, Ataque: 65, Defensa: 60, Velocidad: 110 } },
  { id: '3', name: 'Lugia', image: require('./assets/pokemon3.png'), stats: { HP: 106, Ataque: 90, Defensa: 130, Velocidad: 110 } },
  { id: '4', name: 'Rayquaza', image: require('./assets/pokemon4.png'), stats: { HP: 105, Ataque: 150, Defensa: 90, Velocidad: 95 } },
];

export default function App() {
  const [checkedPokemons, setCheckedPokemons] = useState({});
  const [search, setSearch] = useState('');
  const [bgColor, setBgColor] = useState('#8ecae6');
  const [expanded, setExpanded] = useState({}); 
  const [showCheckedOnly, setShowCheckedOnly] = useState(false);

  const handleCheck = (id) => {
    setCheckedPokemons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBackground = () => {
    setBgColor(bgColor === '#8ecae6' ? '#219ebc' : '#8ecae6');
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] })); 
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>      
      <View style={styles.navbar}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Buscar Pokémon"
        value={search}
        onChangeText={setSearch}
      />
      
      <Button title="Cambiar Fondo" onPress={toggleBackground} buttonStyle={styles.button} />
      <Button
        title={showCheckedOnly ? "Mostrar Todos" : "Mostrar Capturados"}
        onPress={() => setShowCheckedOnly(!showCheckedOnly)}
        buttonStyle={styles.button}
      />

      <ScrollView>
        {pokemons
          .filter(p => !showCheckedOnly || checkedPokemons[p.id]) // Filtra solo los marcados si showCheckedOnly es true
          .filter(p => p.name.toLowerCase().includes(search.toLowerCase())) // Filtra por búsqueda
          .map((pokemon) => (
            <TouchableOpacity key={pokemon.id} onPress={(
            ) => toggleExpand(pokemon.id)}>
              <View style={[styles.pokemonCard, expanded[pokemon.id] && styles.expandedCard]}>
                <Image source={pokemon.image} style={styles.pokemonImage} />
                <Text style={styles.pokemonName}>{pokemon.name}</Text>
                <CheckBox
                  checked={checkedPokemons[pokemon.id]}
                  onPress={() => handleCheck(pokemon.id)}
                  containerStyle={styles.CheckBox}
                />
              </View>

              {expanded[pokemon.id] && (
                <View style={styles.statsContainer}>
                  <Text style={styles.stat}>HP: {pokemon.stats.HP}</Text>
                  <Text style={styles.stat}>Ataque: {pokemon.stats.Ataque}</Text>
                  <Text style={styles.stat}>Defensa: {pokemon.stats.Defensa}</Text>
                  <Text style={styles.stat}>Velocidad: {pokemon.stats.Velocidad}</Text>
                </View>
              )}
            </TouchableOpacity>
        ))}
      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: '#ffb703',
    width: "100%",
    height: 110,
    marginTop:0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    marginTop:40,
    height: 60,
    resizeMode: 'contain',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff5733',
    marginBottom: 10,
  },
  pokemonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
  },
  expandedCard: {
    backgroundColor: '#e3f2fd', 
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  pokemonImage: {
    width: 65,
    height: 65,
    marginRight: 10,
  },
  pokemonName: {
    flex: 1,
    fontSize: 18,
  },
  CheckBox: {
    backgroundColor: 'transparent',
  },
  statsContainer: {
    backgroundColor: '#e3f2fd',
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  stat: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
