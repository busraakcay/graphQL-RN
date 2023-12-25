import axios from 'axios';
import { graphqlEndpoint } from '../config/graphqlConfig';

export const executeQuery = async ({ query, model, variables }) => {
  try {
    const response = await axios.post(
      graphqlEndpoint,
      {
        query,
        variables,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data.data[model];
  } catch (error) {
    console.error('GraphQL query failed:', error);
    throw error;
  }
};
