import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

class Storage {
  static instance = new Storage()

  store = async (key, value) => {
    try {
      await  AsyncStorage.setItem(key, value)
      return true
    } catch (e) {
      console.log("Storage store error", e)
      return false
    }
  }

  getAll = async (keys) => {
    try {
      return await AsyncStorage.multiGet(keys)
    } catch (e) {
      console.log("Storage getAll error", e)
      throw Error(e)
    }
  }

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys()
    } catch (e) {
      console.log("Storage getAllKeys error", e)
      throw Error(e)
    }
  }

  get = async (key) => {
    try {
      return await AsyncStorage.getItem(key)
      } catch (e) {
        console.log("Storage get error", e)
        throw Error(e)
     }
  }

  remove = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
      return true
    } catch (e) {
      console.log("Storage remove error", e)
      return false
    }
  }

}

export default Storage;
