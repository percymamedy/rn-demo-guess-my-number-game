import { View, Image, StyleSheet, Text } from 'react-native';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.root}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{' '}
        <Text style={styles.summaryHighlight}>{roundsNumber}</Text> rounds to
        guess the number{' '}
        <Text style={styles.summaryHighlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    marginTop: 36,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    marginVertical: 24,
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
  },
  summaryHighlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
