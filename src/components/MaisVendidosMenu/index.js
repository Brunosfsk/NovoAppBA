import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';
import { HStack, Box, ScrollView, Heading } from "native-base";


function MaisVendidosMenu() {
  return (
    <View style={styles.container}>
      <Heading size="md">Mais Vendidos</Heading>
     <HStack padding={4} w="100%" alignItems="center" justifyContent="space-between">
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Box rounded="sm" borderColor="#dc2626" borderWidth="3" margin={5} padding={2}>
       <Image style={styles.logo} source={require('../../../assets/lanche.png')}/>
      </Box>

      <Box rounded="sm" borderColor="#dc2626" borderWidth="3" margin={5} padding={2}>
      <Image style={styles.logo} source={require('../../../assets/temaki.png')}/>
      </Box>

      <Box rounded="sm" borderColor="#dc2626" borderWidth="3" margin={5} padding={2}>
      <Image style={styles.logo} source={require('../../../assets/pizza.png')}/>
      </Box>

      <Box rounded="sm" borderColor="#dc2626" borderWidth="3" margin={5} padding={2}>
      <Image style={styles.logo} source={require('../../../assets/Bolo.png')}/>
      </Box>

      <StatusBar style="auto" />
      </ScrollView>
     </HStack>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1, */
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default MaisVendidosMenu;