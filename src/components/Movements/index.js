import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity 
} from 'react-native';

export default function Movements({ data }) {
 return (
   <TouchableOpacity style={styles.container}>
    <Text style={styles.date}>{data.date}</Text>

    <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        <Text style={data.type === 1 ? styles.valuePositive : styles.valueNegative}>
            {data.type === 1 ? `€ ${data.value}` : `€ -${data.value}`}</Text>
    </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#dadada',
        fontWeight: 'bold'
    },
    label: {
        fontSize: 16,
    },
    valuePositive: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    valueNegative: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    }
})