import { Image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import MasonryList from '../components/MasonryList';
import { Text, View } from '../components/Themed';
import pins from '../assets/data/pins'
import { Entypo, Feather } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={[styles.container, {
      marginTop: StatusBar.currentHeight,
      backgroundColor: "#fff"
    }]}>
      <View style={styles.icons}>
        <Feather
          name='share'
          size={24}
          color="#000"
          style={styles.icon}
        />
        <Entypo
          name='dots-three-horizontal'
          size={24}
          color="#000"
          style={styles.icon}
        />
      </View>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://media-exp2.licdn.com/dms/image/C4E03AQHeW5UEEDpClQ/profile-displayphoto-shrink_800_800/0/1645232126578?e=1663200000&v=beta&t=dpFOqAc8IrAvON2MxsUH-xTbLyosQctrnFouviz7VhA"
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Godwin Idemudia</Text>
        <Text style={styles.subTitle}>150 Followers | 542 Followings</Text>
      </View>

      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  subTitle: {
    color: '#181818',
    fontWeight: "600",
    margin: 10
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10
  },
  icon: {
    paddingHorizontal: 10
  }
});
