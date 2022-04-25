import { gql } from '@apollo/client';

export const REPOSITORIES_NAME = gql`
    query RepositoriesName { 
      viewer { 
        login
            repositories(last: 100) {
                nodes {
                    name
                }
                totalCount
            }
      }
    }
`;