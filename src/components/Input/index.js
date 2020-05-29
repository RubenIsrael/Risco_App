import React, { useState, useEffect } from 'react';
import { TextInput, Text } from 'react-native';

import { DARKSEAGREEN_COLOR } from '../../consts/colors';

import stylesGlobal from '../../styles';
import styles from './style';

export default function MyInput({ placeholder, user }){
    console.log(user);

    return(
        <TextInput
            style={stylesGlobal.input}
            placeholder={placeholder}
            placeholderTextColor={DARKSEAGREEN_COLOR}
        >
        <   Text style={styles.text}></Text>
        </TextInput>
    )
}