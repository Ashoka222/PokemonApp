import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

interface LoginProps extends TextInputProps {
  inputStyle?: TextStyle | undefined;
  isError?: boolean;
  errorMessage?: string;
}

const CustomInput: React.FC<LoginProps> = ({
  inputStyle,
  isError,
  errorMessage,
  ...props
}) => {
  return (
    <View>
      <TextInput {...props} style={{...styles.textInputStyle, ...inputStyle}} />
      {isError && <Text style={styles.errorTextStyle}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    marginHorizontal: 16,
    padding: 8,
    marginTop: 16,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  errorTextStyle: {
    fontSize: 14,
    fontWeight: '400',
  },
});

export default CustomInput;
