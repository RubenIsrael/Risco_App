import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ScrollView, KeyboardAvoidingView, Text, FlatList } from 'react-native';
import { Container, Content, Grid, Thumbnail } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { getCategories } from '../../redux/actions/itineraries';
import HeaderMenu from '../../components/HeaderMenu';

import { URL_BASE } from '../../consts';
import { BACKGROUND_COLOR } from '../../consts/colors';

import stylesGlobal from '../../styles';
import styles from './style';

import SlideMenu from '../../navigation';

export default function Home({ route, navigation }){
    const {
        params: {
            user_info
        }
    } = route;

    const dispatch = useDispatch();
    const categories = useSelector(state => state.itineraries.categories);
    console.log(categories);

    useEffect(() => {
        if(!categories)
            dispatch(getCategories({token: user_info.token}));
    }, [categories]);

    const _keyExtractor = (item) => item.id.toString();

    const _renderCategories = (item) => {
        return(
            <TouchableOpacity activeOpacity={0.8} style={{alignItems:'center', height: 135, marginBottom: '5%'}}>
                <Thumbnail square source={{uri: URL_BASE + item.item.image}} style={{ borderRadius: 15, height: '100%', width: '85%', shadowOpacity: 30, alignItems: 'center', justifyContent:'center'}}/>
                <Grid style={{position:'absolute', width: '70%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 35, fontFamily: 'Nunito-Bold'}}>{item.item.name}</Text>
                </Grid>
            </TouchableOpacity>
        );
    }
    return(
        <Container style={{backgroundColor: BACKGROUND_COLOR}}>
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                    <HeaderMenu navigation={navigation}/>
                    <Content contentContainerStyle={[stylesGlobal.content, { alignItems: 'center', marginTop: '5%'}]}>
                        <Grid style={styles.titleGrid}>
                            <Text style={[styles.title]}>¡Hola {user_info.name}!</Text>
                            <Text style={[stylesGlobal.textAlert, {fontSize: 15}]}>¿Qué necesitas hoy?</Text>
                        </Grid>
                        <Grid style={styles.categoriesGrid}>
                            <FlatList
                                data = {categories}
                                keyExtractor = {_keyExtractor}
                                renderItem = {_renderCategories}
                            />
                        </Grid>
                    </Content>
                </KeyboardAvoidingView>
            </ScrollView>
        </Container>
    )
}