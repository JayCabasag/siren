import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyApD58N73DvjXWqNMRyCrmfp3CrioQ2U5o",
  authDomain: "siren-2cc7c.firebaseapp.com",
  projectId: "siren-2cc7c",
  storageBucket: "siren-2cc7c.appspot.com",
  messagingSenderId: "715443261009",
  appId: "1:715443261009:web:7dd2d6952d568769daf270",
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth; only for native platforms (Android and iOS)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
