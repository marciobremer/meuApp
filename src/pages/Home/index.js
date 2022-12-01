import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

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
  },
  {
    id: 4,
    label: 'compra do celular',
    value: '250,00',
    date: '27/11/2022',
    type: 0 // despesas
  },
  {
    id: 5,
    label: 'mercado',
    value: '5,00',
    date: '01/12/2022',
    type: 0 // despesas
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

      <Actions/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3fcff',
  },
  title: {
    fontSize: 18,
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
    marginTop: 14,
  }
});
