import { combineReducers } from 'redux';
import graphqlReducer from './slices/graphqlSlice';

const rootReducer = combineReducers({
  graphql: graphqlReducer,
});

export default rootReducer;
