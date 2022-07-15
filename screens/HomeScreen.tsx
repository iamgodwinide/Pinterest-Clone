import { RootTabScreenProps } from '../types';
import pins from '../assets/data/pins';
import MasonryList from '../components/MasonryList';
import { ScrollView, StatusBar, View } from 'react-native';

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView contentContainerStyle={{
      marginTop: StatusBar.currentHeight,
    }}>
      <MasonryList pins={pins} />
    </ScrollView>
  );
}
