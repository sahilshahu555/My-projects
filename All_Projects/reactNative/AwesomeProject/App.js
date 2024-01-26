import { StatusBar } from 'expo-status-bar';
import {View, Text, Image, ScrollView, TextInput,StyleSheet} from 'react-native';
import Navbar from './src/components/Navbar';


export default function App() {
  return (

    <View>
      <Navbar/>
    <View style={{display:"flex",alignItems:"center",justifyContent:"space-around"}} >
     
      <Text>Some text</Text>
     
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
     
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"center"
  },
});
