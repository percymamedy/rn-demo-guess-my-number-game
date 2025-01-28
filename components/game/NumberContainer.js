import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors.ios';

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 400 ? 12 : 24,
    margin: deviceWidth < 400 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent500,
    fontSize: deviceWidth < 400 ? 26 : 36,
    fontFamily: 'open-sans-bold',
  },
});
