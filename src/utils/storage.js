import AsyncStorage from '@react-native-community/async-storage';

export const saveItem = async (keyName, keyValue) => {
    try{
        await AsyncStorage.setItem(keyName, keyValue);
        return true;
    } catch (error){
        return false;
    }
}

export const getItem = async keyName => {
    try{
        return await AsyncStorage.getItem(keyName);
    } catch (error){
        return false;
    }
}

export const clearAll = async keyName => {
    try{
        return await AsyncStorage.clear();
    } catch (error){
        return false;
    }
}