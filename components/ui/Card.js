import { View, StyleSheet } from 'react-native';

import Colors from '../../constants/colors.ios';

export default function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
});
