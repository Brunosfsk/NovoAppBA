import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { HStack, Box, ScrollView, Heading } from "native-base";
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

function CategoryMenu() {
  return (
    <View style={styles.container}>
      <Heading size="md">Categorias</Heading>
     <HStack padding={4} w="100%" alignItems="center" justifyContent="space-between">
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Box borderRadius={50} borderColor="#dc2626" borderWidth="3" margin={5}>
      <Ionicons name="fast-food" size={24} color="black" padding={15}/>
      </Box>

      <Box borderRadius={100} borderColor="#dc2626" borderWidth="3" margin={5}>
      <MaterialCommunityIcons name="food-turkey" size={24} color="black" padding={15}/>
      </Box>

      <Box borderRadius={100} borderColor="#dc2626" borderWidth="3" margin={5}>
      <Ionicons name="pizza" size={24} color="black" padding={15}/>
      </Box>

      <Box borderRadius={100} borderColor="#dc2626" borderWidth="3" margin={5}>
      <Feather name="search" size={24} color="black" padding={15}/>
      </Box>

      <Box borderRadius={100} borderColor="#dc2626" borderWidth="3" margin={5}>
      <Feather name="search" size={24} color="black" padding={15}/>
      </Box>

      <Box borderRadius={100} borderColor="#dc2626" borderWidth="3" margin={5}>
      <Feather name="search" size={24} color="black" padding={15}/>
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
});

export default CategoryMenu;