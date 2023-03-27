import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { HStack, Input } from "native-base";
import { Feather } from '@expo/vector-icons';

function SearchMenu() {
  return (
    <SafeAreaView style={styles.container}>
     <HStack padding={4} w="60%" alignItems="center" justifyContent="space-between">
      <Image 
      source={require('../../../assets/bairroatv.png')}
      />
      <Input placeholder="Faça sua pesquisa" />
      <Feather name="search" size={24} color="black" padding={10}/>
      <StatusBar style="auto" />
     </HStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
});

export default SearchMenu;