import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: 'row',
  },
  hoursContainer: {
    flexDirection: 'row',
  },
  phoneContainer: {
    flexDirection: 'row',
  },
});

function Details({ address, hours, phoneNumber }) {
  return (
    <View>
      <View style={styles.addressContainer}>
        <MaterialIcons name="location-on" size={24} color="black" />
        <Text>{address}</Text>
      </View>
      <View style={styles.hoursContainer}>
        <Ionicons name="time" size={24} color="black" />
        <View>
          {hours.map((hour, i) => (
            <Text key={i}>{hour}</Text>
          ))}
        </View>
      </View>
      <View style={styles.phoneContainer}>
        <MaterialIcons name="phone" size={24} color="black" />
        <Text>{phoneNumber}</Text>
      </View>
    </View>
  );
}

export default Details;
