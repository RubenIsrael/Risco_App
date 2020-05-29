import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, BUTTON_COLOR, GREEN_COLOR } from '../consts/colors';

export default StyleSheet.create({
    content:{
        flex: 1,
        backgroundColor: BACKGROUND_COLOR
    },  
    input:{
        elevation: 2,
        borderRadius: 15, 
        paddingLeft: '5%',
        backgroundColor: 'white', 
        fontFamily: 'Nunito-Regular',
    },
    button: {
        borderRadius: 15, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BUTTON_COLOR
    },
    textButton:{
        color:'#ffffff',
        fontFamily: 'Nunito-Bold'
    },
    textAlert: {
        fontSize: 12, 
        color: GREEN_COLOR,
    }
});