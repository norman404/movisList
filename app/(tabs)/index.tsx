import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText>Hello world</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
});
