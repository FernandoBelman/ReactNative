import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [checkedItems, setCheckedItems] = useState({});

  const addItem = () => {
    if (!newItem) return;
    const id = items.length.toString();
    setItems([...items, { id, title: newItem }]);
    setCheckedItems({ ...checkedItems, [id]: false });
    setNewItem('');
  };

  const handleCheck = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.titulo}>Lista de Compras</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Añadir producto"
            value={newItem}
            onChangeText={setNewItem}
          />
          <TouchableOpacity style={styles.button} onPress={addItem}>
            <Text style={styles.buttonText}>Agregar</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.bodycontent}>
          {items.map((item) => (
            <CheckBox
              key={item.id}
              title={item.title}
              containerStyle={styles.CheckBox}
              textStyle={styles.itemtext}
              checked={checkedItems[item.id]}
              onPress={() => handleCheck(item.id)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#274c77',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 20,
    marginTop: 35,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    backgroundColor: '#e7ecef',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 15,
    backgroundColor: '#fff',
  },
  bodycontent: {
    width: '100%',
    fontWeight: 900,
    
  },
  CheckBox: {
    backgroundColor: '#6096ba',
    borderRadius: 5,
    marginBottom: 5,
    fontWeight: 900,
  },
  button: {
    backgroundColor: '#8b8c89',
    borderRadius: 5,
    padding: 10,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  itemtext: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
