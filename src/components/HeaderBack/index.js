import React from 'react';
import { Header, Left } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { BUTTON_COLOR, BACKGROUND_COLOR } from '../../consts/colors';
import styles from './style';

export default function HeaderBack({ action }){
    return(
    <Header style={styles.header}>
        <Left style={styles.backIcon}>
            <Icon
                name="angle-left"
                color={BUTTON_COLOR}
                size={35}
                style={{backgroundColor:BACKGROUND_COLOR}}
                onPress={action}
            />
        </Left>
    </Header>
    )
} 