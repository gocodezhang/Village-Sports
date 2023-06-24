import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D918',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  leagueButtonText: {
    fontSize: 16,
    color: 'white',
    marginHorizontal: 8,
  },
});

function SelectButton({ league, navigation }) {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        navigation.navigate('chatRoom', { roomName: league.name });
      }}
    >
      <Ionicons name="chatbubble-sharp" size={24} color="#CEB992" />
      <Text style={styles.leagueButtonText}>{league.name}</Text>
    </TouchableOpacity>
  );
}

export default SelectButton;
