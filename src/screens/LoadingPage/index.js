import React, { useEffect } from 'react';
import { Spinner, Container, Content, Grid } from 'native-base';

import { USER_INFO } from '../../consts';
import { LOGIN, HOME } from '../../consts/screens';
import { getItem } from '../../utils/storage';

import styles from './style';

export default ({ navigation }) => {
    useEffect(() => {
        redirect();
    });

    const redirect = async () => {
        const user_info = await getItem(USER_INFO);
        console.log('user_info LOADING', user_info);

        if(user_info)
            navigation.push(HOME, {user_info: JSON.parse(user_info)});
        else
            navigation.navigate(LOGIN);
    };

    return(
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Grid style={styles.grid}>
                    <Spinner styles={styles.spinner}/>
                </Grid>
            </Content>
        </Container>
    )
}  