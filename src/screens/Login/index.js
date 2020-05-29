import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import messaging, { AuthorizationStatus } from '@react-native-firebase/messaging';

import { ScrollView, KeyboardAvoidingView, TouchableHighlight, TextInput, Text, Alert } from 'react-native';
import { Container, Content, Grid, Thumbnail, Button } from 'native-base';

import { postLogin } from '../../redux/actions/itineraries';
import { saveItem } from '../../utils/storage';

import { USER_INFO } from '../../consts';
import { HOME, REGISTER } from '../../consts/screens';
import { DARKSEAGREEN_COLOR } from '../../consts/colors';

import stylesGlobal from '../../styles';
import styles from './style';

export default function Login({ navigation }){
    const dispatch = useDispatch();
    const info = useSelector(state => state.itineraries.user_info);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [passwordError, setPasswordError] = useState(false);
    const [emailWrong, setEmailWrong] = useState(false);
    const [phoneWrong, setPhoneWrong] = useState(false);

    useEffect(() => {
        requestUserPermission();

        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
    }, []);

    const validInputs = () => {
        console.log("HOLA1");
        setPasswordError(false);
        setEmailWrong(false);
        setPhoneWrong(false);

        if(!user){
            console.log("HOLA2");
            setEmailWrong(true);
            setPhoneWrong(true);
        }
        else{
            if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(user)))
                setEmailWrong(true);

            if(!(/^([0-9])*$/).test(user))
                setPhoneWrong(true);
            console.log("HOLA3");
        }
        if(!password){
            console.log("HOLA4");
            setPasswordError(true);
        }

        if(user && password && !passwordError && (!emailWrong || !phoneWrong)){
            console.log("HOLA5");
            //console.log('user:', user, 'password:', password, 'passwordError:', passwordError, 'emailWrong:', emailWrong, 'phoneWrong:', phoneWrong);
            if(!emailWrong)
                dispatch(postLogin({ email: user, password: password }));
            if(!phoneWrong)
                dispatch(postLogin({ phone: user, password: password }));

            if(info)
                storageSave();
        }
        console.log("HOLA6");
    }

    const storageSave = async () => {
        const user_info = {token: info.access_token, name: info.client_name, image: info.image}
        const save_storage_result = await saveItem(USER_INFO, JSON.stringify(user_info));

        if(save_storage_result)
            navigation.navigate(HOME, {user_info: user_info});
    }

    requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
        if (enabled) {
            getFcmToken() //<---- Add this
            console.log('Authorization status:', authStatus);
        }
    }

    getFcmToken = async () => {
        const fcmToken = await messaging().getToken();
        
        if (fcmToken) {
            console.log(fcmToken);
            console.log("Your Firebase Token is:", fcmToken);
        } else 
            console.log("Failed", "No token received");
    }
    
    return(
        <ScrollView>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                <Container>
                    <Content contentContainerStyle={stylesGlobal.content}>
                        <Grid style={styles.mainGrid}>
                            <Grid style={{flex:0.1}}></Grid>
                            <Grid style={styles.imageGrid}>
                                <TouchableHighlight style={styles.marginImage}>
                                    <Thumbnail style={styles.image} source={require('../../../assets/images/logo_login.png')}/>
                                    {/*<Image style={styles.image} source={require('../../../assets/images/logo_login.png')}/>*/}                        
                                </TouchableHighlight>
                            </Grid>
                            <Grid style={styles.inputGrid}>
                                    <Text style={styles.title}>¡Bienvenido!</Text>
                                    <Grid style={styles.textInputGrid}>
                                        <TextInput
                                            style={stylesGlobal.input}
                                            placeholder={'Correo Electrónico / Celular'}
                                            placeholderTextColor={DARKSEAGREEN_COLOR}
                                            onChangeText={(text) => setUser(text)}
                                        />
                                        { !emailWrong || !phoneWrong ? null : <Text style={stylesGlobal.textAlert}>Ingresa un formato correcto</Text> }
                                    </Grid>
                                    <Grid style={styles.textInputGrid}>
                                        <TextInput
                                            style={stylesGlobal.input}
                                            secureTextEntry={true}
                                            placeholder={'Contraseña'}
                                            placeholderTextColor={DARKSEAGREEN_COLOR}
                                            onChangeText={(text) => setPassword(text)}
                                        />
                                        { !passwordError ? null : <Text style={stylesGlobal.textAlert}>Ingresa tu contraseña</Text> }
                                    </Grid>
                                    <Grid style={styles.linkGrid}>
                                        <Text style={styles.textRegular}>¿Olvidaste tu contraseña? <Text style={styles.textLink} onPress={() => validaInputs()}>Recuperála</Text></Text>
                                    </Grid>
                            </Grid>
                            <Grid style={styles.buttonGrid}>
                                <Button 
                                    style={[stylesGlobal.button, styles.button]}
                                    onPress={validInputs}
                                >
                                    <Text uppercase={false} style={stylesGlobal.textButton}>Iniciar Sesión</Text>
                                </Button>
                                <Text style={[styles.textRegular, {marginTop: '10%'}]}>¿No tienes una cuenta?</Text>
                                <Text style={styles.textLink} onPress={() => navigation.navigate(REGISTER)}>Regístrate</Text>
                            </Grid>
                        </Grid> 
                    </Content>
                </Container>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}  