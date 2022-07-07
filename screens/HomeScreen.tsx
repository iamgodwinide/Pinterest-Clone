import { ScrollView, StyleSheet, View } from 'react-native';

import Pin from '../components/Pin';
import { RootTabScreenProps } from '../types';
import pins from '../assets/data/pins';

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* column */}
        <View style={styles.column}>
          {
            pins.filter((_, index) => index % 2 === 0)
              .map((pin, _) => (
                <Pin
                  pin={pin}
                  key={pin.id}
                />
              ))
          }
        </View>
        {/* column */}
        {/* column */}
        <View style={styles.column}>
          {
            pins.filter((_, index) => index % 2 !== 0)
              .map((pin, _) => (
                <Pin
                  pin={pin}
                  key={pin.id}
                />
              ))
          }
        </View>
        {/* column */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flex: 1,
    padding: 2
  }
});
