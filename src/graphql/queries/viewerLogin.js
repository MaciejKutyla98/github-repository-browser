import { gql } from '@apollo/client';

export const VIEWER_LOGIN = gql`
     query ViewerLogin {
       viewer {
         login
       }
     }
`;

