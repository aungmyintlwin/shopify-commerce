import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: string, value: string) => {
  try {
    if (typeof value == 'undefined' || typeof key == 'undefined') {
      console.log.apply('error on local store')
    } else {
      await AsyncStorage.setItem(key, value)
    }
  } catch (e) {
    console.log("Can't save data : ", e);
  }
}

export const getItem = async (key: string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue ? jsonValue : null;
}

export const clearStorage = async () => {
  await AsyncStorage.clear();
}

export const deleteMultiItems = async (keys: string[]) => {
  await AsyncStorage.multiRemove(keys);
}

export const clearAppData = async function() {
  try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
  } catch (error) {
      console.error('Error clearing app data.');
  }
}
export const getAllKeys = async () => {
  try {
    let keys = await AsyncStorage.getAllKeys();
    if(keys) {
      return keys;
    }
    return [];
    
  } catch(e) {
    return [];
  }
}
export const removeMulti = async (keys: string[]) => {
  try {
    await AsyncStorage.multiRemove(keys)
  } catch(e) {
    console.log(e)
  }
}


