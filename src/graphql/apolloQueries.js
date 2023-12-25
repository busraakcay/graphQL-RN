import { gql } from '@apollo/client';

const GET_GAMES = gql`
  query GetGames {
    games {
      id
      title
      platforms
    }
  }
`;

export { GET_GAMES };
