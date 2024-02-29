import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './BatInputStyles';

interface BatTextInputProps{
  pass:string
}

export function BatTextInput(props : BatTextInputProps) {
  return (
    <View>
        <TextInput 
        style={styles.inputer}
        placeholder='pass' 
        value={props.pass}
        />
    </View>
  );
}