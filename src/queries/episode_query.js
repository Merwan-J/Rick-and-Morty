import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int!, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
        }
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        status
        species
        gender
      }
    }
  }
`;
