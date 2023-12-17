import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const CustomButton: React.FC<ButtonProps> = ({title, ...props}) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} {...props}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  touchableOpacity: {
    backgroundColor: 'orange',
    margin: 16,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 8,
  },
});

export default CustomButton;
