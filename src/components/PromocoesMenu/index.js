import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { HStack, Box, ScrollView, Heading } from "native-base";
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

function PromocoesMenu() {
  return (
    <View style={styles.container}>
      <Heading size="md">Promoções</Heading>
     <HStack padding={4} w="100%" alignItems="center" justifyContent="space-between">
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Box rounded="sm" borderColor="#dc2626" borderWidth="3" margin={5} width={180}>
      <Image style={styles.banner} source={require('../../../assets/bannerpromo.png')}/>
      </Box>

      <Box rounded="sm" borderColor="#dc2626" borderWidth="3" margin={5} width={180}>
      <Image style={styles.banner} source={require('../../../assets/bannerpromo.png')}/>
      </Box>

      <Box rounded="sm" borderColor="#dc2626" borderWidth="3" margin={5} width={180}>
      <Image style={styles.banner} source={require('../../../assets/bannerpromo.png')}/>
      </Box>

      <Box rounded="sm" borderColor="#dc2626" borderWidth="3" margin={5} width={180}>
      <Image style={styles.banner} source={require('../../../assets/bannerpromo.png')}/>
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
  banner: {
    width: '100%',
    height: 80,
  },
});

export default PromocoesMenu;