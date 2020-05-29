import { StyleSheet, Dimensions } from 'react-native';
import { GREEN_COLOR, DARK_GREEN_COLOR, BLACK_COLOR } from '../../consts/colors';

const { width, height } = Dimensions.get('window');
 
export default StyleSheet.create({
    mainGrid:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageGrid: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    marginImage:{
        width: width * 0.5,
        height: width * 0.5,
        borderRadius: Math.round(width + height) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    image:{
        width: '70%', 
        height: '70%', 
    },
    inputGrid: {
        flex: 0.3,
        width: '85%',
        flexDirection: 'column',
    },
    inputGrid2:{
        flex: 0.85,
        height: '100%',
    },
    title:{
        flex: 0.3,
        fontSize: 25,
        textAlign: 'left',
        fontFamily: 'Nunito-Bold',
        color: BLACK_COLOR
    },
    textInputGrid: {
        flex: 0.3, 
        flexDirection: 'column',
        marginBottom: '8%',
    },
    linkGrid:{ 
        flex: 0.1, 
        flexDirection: 'column', 
        alignItems: 'flex-end', 
        justifyContent: 'flex-end',
    },
    buttonGrid: {
        flex: 0.3,
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    button: {
        flex: 0.3,
        width: '100%',
    },
    textRegular: {
        fontFamily: 'Nunito-SemiBold',
        color: DARK_GREEN_COLOR
    },
    textLink: {
        fontFamily: 'Nunito-Bold',
        color: GREEN_COLOR, 
    }
});