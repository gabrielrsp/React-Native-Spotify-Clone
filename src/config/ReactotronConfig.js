import Reactotron from "reactotron-react-native";
// import AsyncStorage from '@react-native-community/async-storage';

import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from "reactotron-redux-saga";

if (__DEV__) {
  const tron = Reactotron.configure({ host: "localhost" }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    // .setAsyncStorageHandler(AsyncStorage) // Prevent Multiple Connection at Reactotron
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect(); // let's connect!

  tron.clear();
  console.tron = tron;
}
