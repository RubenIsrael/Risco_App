import React from 'react';
import { Header, Left } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { BUTTON_COLOR, BACKGROUND_COLOR } from '../../consts/colors';
import styles from './style';
import SlideMenu from '../../navigation';
 
export default function HeaderMenu({ navigation }){
    const drawer = () => {
        return(
            <SlideMenu/>
        )
    }
    return(
    <Header noShadow style={styles.header}>
        <Left style={styles.backIcon}>
            <Icon
                name="navicon"
                color={BUTTON_COLOR}
                size={35}
                style={{backgroundColor:BACKGROUND_COLOR}}
                onPress={drawer}
            />
        </Left>
    </Header>
    )
} 