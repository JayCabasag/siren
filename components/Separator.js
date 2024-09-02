import React from 'react';
import { StyleSheet, View} from 'react-native';

import { Colors } from '../config';

export const Separator = ({
    style
  }) => {
    return (
      <View style={[styles.line, style]}></View>
    );
  };
  
  const styles = StyleSheet.create({
    line: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.mediumGray
    }
  });
  