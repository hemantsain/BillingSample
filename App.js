import React from 'react';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/state/store';
import { StatusBar } from 'react-native';
import Colors from './src/styles/Colors';

export default class App extends React.PureComponent {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={configureStore().store}>
        <PersistGate persistor={configureStore().persistor}>
          <StatusBar translucent backgroundColor={Colors.green} />
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}
