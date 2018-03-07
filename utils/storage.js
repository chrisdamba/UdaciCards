import { AsyncStorage } from 'react-native'

export async function read(key, deserializer) {
  try {
    let val = await AsyncStorage.getItem(key)
    if (val !== null) {
      let readValue = JSON.parse(val).map(serialized => {
        return deserializer(serialized)
      })
      return readValue
    } else {
      console.info(`${key} not found on disk.`)
      return []
    }
  } catch (error) {
    console.warn('AsyncStorage error: ', error.message)
  }
}

export async function write(key, item) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item))
  } catch (error) {
    console.error('AsyncStorage error: ', error.message)
  }
}