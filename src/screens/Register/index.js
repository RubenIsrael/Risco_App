import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, KeyboardAvoidingView, TextInput, Text} from 'react-native';
import { Container, Content, Grid, Button, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { postRegistry } from '../../redux/actions/itineraries';
import { saveItem } from '../../utils/storage';

import { USER_INFO } from '../../consts';
import { HOME } from '../../consts/screens';
import{ DARKSEAGREEN_COLOR, DARK_GREEN_COLOR, BACKGROUND_COLOR} from '../../consts/colors';

import HeaderBack from '../../components/HeaderBack';
 
import stylesGlobal from '../../styles';
import styles from './style';

import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
    title: 'Select Photo',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default function Register({ navigation }){
    const dispatch = useDispatch();
    const info = useSelector(state => state.itineraries.user_info);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [imageSource, setImageSource] = useState();

    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordError2, setPasswordError2] = useState(false);
    const [emailWrong, setEmailWrong] = useState(false);

    useEffect(() => {
    });

    const storageSave = async () => {
        const user_info = {token: info.access_token, name: info.client_name, image: info.image}
        const userResult = await saveItem(USER_INFO, JSON.stringify(user_info));

        if(userResult)
            navigation.navigate(HOME, {user_info: user_info});
    }

    const validInputs = () => {
        setNameError(false);
        setPhoneError(false);
        setPasswordError(false);
        setPasswordError2(false);

        if(!name)
            setNameError(true);
        if(email){
            if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)))
                setEmailWrong(true);
        }
        if(!phone)
            setPhoneError(true);
        if(!password)
            setPasswordError(true);
        else{
            if(password !== password2)
                setPasswordError2(true);
        }
        const imgFile = {
            uri: imageSource.uri,
            type: imageSource.type, // or photo.type
            name: imageSource.fileName
        };
        
        console.log('IMAGE: ', imageSource);
        if(name && phone && password && !nameError && !phoneError && !passwordError && !passwordError2 && !emailWrong)
            dispatch(postRegistry({ name: name, email: email, phone: phone, password: password, image: imgFile}));

        if(info)
            storageSave();
    }

    function chooseImage(){
        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info in the API Reference)
         */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
        
            if (response.didCancel) {
            console.log('User cancelled image picker');
            } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            } else {                
                setImageSource(response);
                console.log('SOURCEEEE: ', response);
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            }
        });
    }
 
    return(        
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                    <Container>
                        <HeaderBack action={() => {navigation.goBack()}}/>
                        <Content contentContainerStyle={stylesGlobal.content}>
                            <Grid style={styles.mainGrid}>
                                <Grid style={styles.titleGrid}>
                                    <Text style={styles.title}>Registro</Text>
                                </Grid>
                                <Grid style={styles.imageGrid}>
                                    { !imageSource
                                        ? <Thumbnail style={styles.image} source={require('../../../assets/images/user_photo.jpg')}/>
                                        : <Thumbnail style={styles.image} source={{uri: imageSource.uri}}/>
                                    }
                                    <Icon 
                                        name="pencil" 
                                        color={'white'} 
                                        size={35} 
                                        style={{backgroundColor:DARK_GREEN_COLOR, borderRadius: 30, position: 'absolute', top: '75%', right:'30%'}}
                                        onPress={chooseImage}
                                    />
                                </Grid>
                                <Grid style={styles.inputGrid}>
                                    <Grid style={styles.textInputGrid}>
                                        <TextInput
                                            style={stylesGlobal.input}
                                            placeholder={'Nombre(s) y Apellido'}
                                            placeholderTextColor={DARKSEAGREEN_COLOR}
                                            onChangeText={(text) => setName(text)}
                                        />
                                        { nameError ? <Text style={stylesGlobal.textAlert}>Ingresa Nombre(s) y Apellido</Text> : null }
                                    </Grid>
                                    <Grid style={styles.textInputGrid}>
                                        <TextInput
                                            style={stylesGlobal.input}
                                            placeholder={'Correo Electrónico'}
                                            placeholderTextColor={DARKSEAGREEN_COLOR}
                                            onChangeText={(text) => setEmail(text)}
                                        />
                                        { emailWrong ? <Text style={stylesGlobal.textAlert}>Ingresa un formato de correo correcto</Text> : null }
                                    </Grid>
                                    <Grid style={styles.textInputGrid}>
                                        <TextInput
                                            style={stylesGlobal.input}
                                            placeholder={'Celular'}
                                            placeholderTextColor={DARKSEAGREEN_COLOR}
                                            onChangeText={(text) => setPhone(text)}
                                        />
                                        { phoneError ? <Text style={stylesGlobal.textAlert}>Ingresa número de celular</Text> : null }
                                    </Grid>
                                    <Grid style={styles.textInputGrid}>
                                        <TextInput
                                            secureTextEntry={true}
                                            style={stylesGlobal.input}
                                            placeholder={'Contraseña'}
                                            placeholderTextColor={DARKSEAGREEN_COLOR}
                                            onChangeText={(text) => setPassword(text)}
                                        />
                                        { passwordError ? <Text style={stylesGlobal.textAlert}>Ingresa una contraseña</Text> : null }
                                    </Grid>
                                    <Grid style={styles.textInputGrid}>
                                        <TextInput
                                            secureTextEntry={true}
                                            style={stylesGlobal.input}
                                            placeholder={'Confirmar contraseña'}
                                            placeholderTextColor={DARKSEAGREEN_COLOR}
                                            onChangeText={(text) => setPassword2(text)}
                                        />
                                        { passwordError2 ? <Text style={stylesGlobal.textAlert}>La contraseña no coincide</Text> : null }
                                    </Grid>
                                </Grid>
                                <Grid style={styles.buttonGrid}>
                                    <Button style={[stylesGlobal.button, styles.button]} onPress={validInputs}>
                                        <Text uppercase={false} style={{color:'white', fontFamily: 'Nunito-Bold'}}>Iniciar Sesión</Text>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Content>
                    </Container>
                </KeyboardAvoidingView>
            </ScrollView>
    )
}