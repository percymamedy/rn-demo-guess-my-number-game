import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

export default function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be between 1 and 99.', [
        {
          text: 'Try again',
          style: 'destructive',
          onPress: () => setEnteredNumber(''),
        },
      ]);
      return;
    }

    onPickedNumber(chosenNumber);
  }

  const { width, height } = useWindowDimensions();

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <View style={styles.titleContainer}>
            <Title>Let's play a game!</Title>
          </View>
          <View style={styles.formContainer}>
            <Card>
              <InstructionText>Enter a number</InstructionText>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.numberInput}
                  maxLength={2}
                  keyboardType="number-pad"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={enteredNumber}
                  onChangeText={setEnteredNumber}
                />
              </View>
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={() => setEnteredNumber('')}>
                    Reset
                  </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={confirmInputHandler}>
                    Confirm
                  </PrimaryButton>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 36,
    marginHorizontal: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    itemAlign: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    itemAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 0,
  },
});
