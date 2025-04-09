import { Text, View, StyleSheet } from 'react-native';
import colors from '../colors';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TEST by Jong</Text>
    </View>
  );
}s

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});
