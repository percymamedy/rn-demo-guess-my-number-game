import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors.ios';

export default function RoundLog({ roundNumber, guess }) {
  return (
    <View style={styles.root}>
      <Text style={styles.guessText}>#{roundNumber}</Text>
      <Text style={styles.guessText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.26,
    shadowRadius: 3,
  },
  guessText: {
    fontFamily: 'open-sans',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary500,
  },
});
