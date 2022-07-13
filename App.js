import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/transaction.js';
import SearchScreen from './screens/search.js';
import BottomTabNavigator from './components/bottomtagnavigator.js';



export default function App() {
  return (
      <BottomTabNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
