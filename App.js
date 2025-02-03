import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.titulo}>To-Do-List</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.titulocont}>
          <Text style={styles.titulobody}>Lista de compras</Text>
        </View>
        <ScrollView style={styles.bodycontent}>
          <CheckBox title={"Leche"} containerStyle={styles.CheckBox}/>
          <CheckBox title={"Huevo"}containerStyle={styles.CheckBox}/>
          <CheckBox title={"Pan"}containerStyle={styles.CheckBox}/>
          <CheckBox title={"Chetos"}containerStyle={styles.CheckBox}/>
          <CheckBox title={"Riness"}containerStyle={styles.CheckBox}/>
          <CheckBox title={"Aceite"}containerStyle={styles.CheckBox}/>
          <CheckBox title={"Salsa"}containerStyle={styles.CheckBox}/>
          <CheckBox title={"Cereal"}containerStyle={styles.CheckBox}/>
          <CheckBox title={"Atun"}containerStyle={styles.CheckBox}/>
          <CheckBox title={"Coca"}containerStyle={styles.CheckBox}/>
          <CheckBox title={"Fanta"}containerStyle={styles.CheckBox}/>
          <CheckBox title={"No  robar"}containerStyle={styles.CheckBox}/>
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
  navbar:{
    backgroundColor: '#ccd5ae',
    height: '10%',
    width: '100%',
    marginTop: '0%',
    textAlign: 'justify',
    justifyContent:'center',
    
  },
  titulo:{
    color: '#fff',
    fontSize:20,
    fontWeight:'bold',
    marginStart: 20,
    marginTop:35,
  },
  body:{
    height:'90%',
    backgroundColor:'#faedcd',
    maxWidth:'100%',
  },
  titulocont:{
    backgroundColor: '',
    height:'10%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  titulobody:{
    color:'#000',
    fontSize:30,
    fontWeight:'bold',
  },
  bodycontent:{
    marginBottom:'10%',
    width:'100%'
  },
  CheckBox:{
    backgroundColor: '#d4a373',
    width:'50%',
    fontSize: 15,
    marginLeft: '20%',
    borderRadius: '5%'
  }
});

