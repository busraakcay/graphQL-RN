import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../constants/screens';
import { Detail, Home } from '../screens';
import useQuery from '../hooks/useQuery';
import { moviesQuery } from '../graphql/moviesQuery';

const Stack = createNativeStackNavigator();
const AppStack = () => {

  const { data, loading, error, sendQuery } = useQuery({
    model: 'movies',
    query: moviesQuery,
  });

  useEffect(() => {
    sendQuery();
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;
  return (
    <Stack.Navigator initialRouteName={screens.Home}>
      <Stack.Screen name={screens.Home} component={Home} />
      <Stack.Screen name={screens.Detail} component={Detail} />
    </Stack.Navigator>
  );
};

export default AppStack;
