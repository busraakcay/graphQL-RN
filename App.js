import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/stacks/AppStack';

// import {ApolloProvider} from '@apollo/client';
// import {apolloClient} from './src/clients/apolloClient';

const App = () => {
  return (
    <Provider store={store}>
      {/* <ApolloProvider client={apolloClient}> */}
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
      {/* </ApolloProvider> */}
    </Provider>
  );
};

export default App;
