import { StyleSheet } from 'react-native';
import { BLACK_COLOR } from '../../consts/colors';

export default StyleSheet.create({
    titleGrid: {
        flex: 0.2,
        width: '85%',
        marginTop: '5%',
        marginBottom: '5%',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: 25,
        color: BLACK_COLOR,
        fontFamily: 'Nunito-Bold',
    },
    categoriesGrid:{
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    }
});