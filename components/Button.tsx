import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '../app/colors';

type Props = {
  label: string;
  theme?: 'primary'; // ! ? is optional chaining operator, if not given "primary" it SETS TO UNDEF
}

export default function Button({ label, theme }: Props) {
  // PRIMARY THEME (default)
  if (theme == 'primary') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  // PROPS-GIVEN THEME (passed to Button.tsx) 
  else {
    return (
      <View style={[
        styles.buttonContainer,
        {width: 160, aspectRatio: 'auto', height: 70}
      ]}>
        <Pressable 
          style={[styles.button, {borderRadius: 6}]} 
          onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '50%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3%',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.navyBlue,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
