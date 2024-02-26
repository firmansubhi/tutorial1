import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/AuthContext';

const ProfileScreen = () => {
  const { handleLogout } = useAuth();
  const onPressLogout = async () => {
    try {
      await AsyncStorage.removeItem('appuser');
      handleLogout();
    } catch (error) {
      console.error('Error removing item from AsyncStorage: ', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Setting</Text>
      <Button title="Logout" onPress={onPressLogout} />
    </View>
  );
};

export default ProfileScreen;
