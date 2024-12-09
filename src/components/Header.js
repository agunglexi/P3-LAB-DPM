import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>List Nama</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#dda0dd',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#eee8aa',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;