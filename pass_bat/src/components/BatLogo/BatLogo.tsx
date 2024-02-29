import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/Batman-Logo-2016.png'

export function BatLogo() {
  return (
    <View >
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
        <Image source={batLogo} style={{width: 400, height: 230}}/>
    </View>
  );
}