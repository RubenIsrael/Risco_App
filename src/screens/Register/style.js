import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainGrid:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleGrid:{
        flex: 0.1,
        width: '85%',
        flexDirection:'row',
        alignItems: 'center'
    },
    title:{
        fontSize: 25,
        textAlign: 'left',
        fontFamily: 'Nunito-Bold'
    },
    imageGrid: {
        flex: 0.2,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '45%',
        height: '110%',
        borderRadius: 70, 
    },
    inputGrid:{
        flex: 0.5,
        width: '100%',
        paddingTop: '5%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textInputGrid: {
        width: '85%',
        flexDirection: 'column',
        marginBottom: '5%',
    },
    buttonGrid:{
        flex: 0.2,
        alignItems: 'center',
    },
    button: {
        width: '85%',
    },
});