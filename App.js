import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const userName = 'Jose Jose Lover';
const userDescription = 'JosJos_love\nTesorero oficial del club de fans Jose Jose.\nPreso de la carsel de besos\n2:43';
const posts = [
  require('./assets/post1.jpg'),
  require('./assets/post2.jpg'),
  require('./assets/post3.jpg'),
  require('./assets/post4.jpg'),
  require('./assets/post5.jpg'),
  require('./assets/post6.jpg'),
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>{userName}</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profileHeader}>
          <Image
            source={require('./assets/user.jpg')}
            style={styles.profileImage}
          />
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>6</Text>
              <Text style={styles.statLabel}>Publicaciones</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>12 M</Text>
              <Text style={styles.statLabel}>Seguidores</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>200</Text>
              <Text style={styles.statLabel}>Seguidos</Text>
            </View>
          </View>
        </View>
        <Text style={styles.description}>{userDescription}</Text>
      </View>

      <View style={styles.postsSection}>
        <Text style={styles.sectionTitle}>Publicaciones</Text>
        <View style={styles.postsContainer}>
          {posts.map((post, index) => (
            <Image key={index} source={post} style={styles.postImage} />
          ))}
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#3a5a40',
    height: 100,
    justifyContent: 'center',
    marginTop: 0,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginTop: 40,
    fontWeight: 'bold',
  },
  profileSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: '',
    marginTop: 10,
    fontWeight: 500,
  },
  postsSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postImage: {
    width: '48%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});
