import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Images } from '../config';

export const Logo = ({ uri, style }) => {
  return <Image source={uri} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
});
