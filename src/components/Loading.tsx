import React, {PropsWithChildren} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

type LoadingProps = PropsWithChildren<{
  isLoading: boolean;
}>;

const Loading = ({isLoading}: LoadingProps) => {
  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator animating={isLoading} size={'large'} color={'white'} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
});

export default Loading;
