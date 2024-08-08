// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrincipleScreen from './src/screens/index';

export default function App() {
  return (
    <View style={styles.container}>
      <PrincipleScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#808080',
      paddingTop: 10,
  },
});
