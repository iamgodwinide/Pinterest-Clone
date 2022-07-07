import { ScrollView, StyleSheet } from 'react-native';

import Pin from '../components/Pin';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView
      containerStyle={styles.container}
      style={{
        backgroundColor: "#fff"
      }}
    >
      <Pin
        pin={{
          title: "Notjust Dev",
          image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg"
        }}
      />
      <Pin
        pin={{
          title: "New Image",
          image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/6.jpeg"
        }}
      />
      <Pin
        pin={{
          title: "First Love",
          image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg"
        }}
      />
      <Pin
        pin={{
          title: "Cool Image",
          image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg"
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
