import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Button } from 'react-native-paper';

interface MyComponentProps {
  title: string;
  onPress: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onPress }) => {
  return ( <View styles ={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button mode="contained" onPress={onPress}>
        Press me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  } as ViewStyle,
  title: {
    fontSize: 24,
    marginBottom: 16,
  } as TextStyle,
});

export default MyComponent;
