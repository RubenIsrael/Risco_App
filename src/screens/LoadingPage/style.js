import { StyleSheet } from 'react-native';
import { GREEN_COLOR, BACKGROUND_COLOR } from '../../consts/colors';

export default StyleSheet.create({
    content:{
        flex: 1,
        backgroundColor: BACKGROUND_COLOR
    },
    grid:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    spinner: {
        color: GREEN_COLOR
    }
})