import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CategoryMenu from '../../components/CategoryMenu';
import MaisVendidosMenu from '../../components/MaisVendidosMenu';
import NovidadesMenu from '../../components/NovidadesMenu';
import PromocoesMenu from '../../components/PromocoesMenu';
import SearchMenu from '../../components/SearchMenu'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <SearchMenu />
        <CategoryMenu />
        <MaisVendidosMenu />
        <PromocoesMenu />
        <NovidadesMenu />
       </ScrollView>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /* container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, */
});
