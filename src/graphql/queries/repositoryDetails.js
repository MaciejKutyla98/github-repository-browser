import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
    query RepositoryDetails($name: String!){ 
      viewer { 
        login
            repositories(last: 100) {
                nodes {
                    name
                  issues(last:100) {
                    nodes {
                      number
                      id
                    }
                    totalCount
    
                  }
                  releases(last:100) {
                    nodes {
                      name
                      id
                    }
                    totalCount
                  }
                }
                totalCount
            }
        repository(name: $name) {
        object(expression:"master") {
          ... on Commit {
            history {
              totalCount
              nodes {
                message
              }
            }
            
          }
        }
      }
      }
    }
`;