import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR } from '../../consts/colors';

export default StyleSheet.create({
    header:{
        alignItems: 'flex-start',
        backgroundColor: BACKGROUND_COLOR
    },
    backIcon:{
        flex:0.9,
        height: '100%',
        alignItems: 'flex-start',
        justifyContent:'flex-end'
    }
});