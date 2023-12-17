import React, {RefObject} from 'react';
import {
  StackActions,
  CommonActions,
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';
import {isEmptyOrNull} from '../utils/commonFunctions';

interface NavigationFunctions {
  navigate: (routeName: string, params?: object) => void;
  replace: (routeName: string, params?: object) => void;
  goBack: () => void;
  reset: (routeName: string) => void;
  popToTop: (count?: number) => void;
}

export const navigationRef: RefObject<NavigationContainerRef<ParamListBase>> =
  React.createRef();

export const NavigationService: NavigationFunctions = {
  navigate: (routeName, params) => {
    navigationRef.current && navigationRef.current.navigate(routeName, params);
  },
  replace: (routeName, params) => {
    navigationRef.current &&
      navigationRef.current.dispatch(StackActions.replace(routeName, params));
  },
  goBack: () => {
    navigationRef.current && navigationRef.current.goBack();
  },
  reset: routeName => {
    navigationRef.current &&
      navigationRef.current.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: routeName}],
        }),
      );
  },
  popToTop: count => {
    if (isEmptyOrNull(count)) {
      navigationRef.current &&
        navigationRef.current.dispatch(StackActions.popToTop());
    } else {
      navigationRef.current &&
        navigationRef.current.dispatch(StackActions.pop(count));
    }
  },
};
