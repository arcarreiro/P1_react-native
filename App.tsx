import { View } from 'react-native';
import { Home } from './src/pages/Home';
import { MyProvider } from './src/context/MyContext';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <MyProvider>
      <Home />
      </MyProvider>
    </View>
  );
}


