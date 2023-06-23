import React from 'react';
import {
  View, StyleSheet, Text, Linking,
} from 'react-native';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5d536b',
    margin: 18,
    borderRadius: 10,
  },
  sectionContainer: {
    flexDirection: 'row',
    margin: 8,
  },
  textInfo: {
    paddingHorizontal: 16,
    color: 'white',
  },
  hoursContainer: {
    paddingHorizontal: 16,
    gap: 2,
  },
  hourText: {
    color: 'white',
  },
});

/* eslint "react/no-array-index-key":0 */
function Details({
  address, hours, phoneNumber, website,
}) {
  return (
    <View style={styles.container}>
      {address
        ? (
          <View style={styles.sectionContainer}>
            <MaterialIcons name="location-on" size={24} color="#CEB992" />
            <Text style={styles.textInfo}>{address}</Text>
          </View>
        ) : null}
      {hours
        ? (
          <View style={styles.sectionContainer}>
            <Ionicons name="time" size={24} color="#CEB992" />
            <View style={styles.hoursContainer}>
              {hours.map((hour, i) => (
                <Text style={styles.hourText} key={i}>{hour}</Text>
              ))}
            </View>
          </View>
        ) : null}
      {phoneNumber
        ? (
          <View style={styles.sectionContainer}>
            <MaterialIcons name="phone" size={24} color="#CEB992" />
            <Text style={styles.textInfo}>{phoneNumber}</Text>
          </View>
        ) : null}
      {website
        ? (
          <View style={styles.sectionContainer}>
            <MaterialCommunityIcons name="web" size={24} color="#CEB992" />
            <Text
              style={styles.textInfo}
              onPress={() => (Linking.openURL(website))}
            >
              {website}
            </Text>
          </View>
        ) : null}
    </View>
  );
}

export default Details;
