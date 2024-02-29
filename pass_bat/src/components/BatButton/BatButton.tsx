import React, { useState } from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatInput';
import generatePassword from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [pass, setPass] =useState('');

    function handleGeberateButton() {
        let generateToken = generatePassword()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }
  return (
    <View >
        <BatTextInput pass={pass}/>

        <Pressable style={styles.button}
        onPress={handleGeberateButton}>
            <Text style={styles.text}> GENERATE </Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={handleCopyButton}>
            <Text style={styles.text} >⚡ COPY </Text>
        </Pressable>
        
    </View>
  );
}