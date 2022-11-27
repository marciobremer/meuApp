import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    label: 'boleto seguro carro',
    value: '142,00',
    date: '18/11/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'extra',
    value: '60,00',
    date: '16/11/2022',
    type: 1 // entrada
  },
  {
    id: 3,
    label: 'extra',
    value: '60,00',
    date: '07/11/2022',
    type: 1 // entrada
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Marcio Bremer"/>

      <Balance saldo="2.230,00" gastos="-340,00"/>

      <Text style={styles.title}>Últimas movimentações.</Text>

      <FlatList style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item }) => <Movements data={item}/>}      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
    marginTop: 14,
  }
});
