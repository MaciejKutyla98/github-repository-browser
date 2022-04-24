import { gql, useQuery } from '@apollo/client';

export const VIEWER_LOGIN = gql`
     query ViewerLogin {
       viewer {
         login
       }
     }
`;

// export const ViewerLogin = () => {
//     const { loading, error, data } = useQuery(VIEWER_LOGIN);
//     if (loading) return <p>Loading ...</p>;
//     return <h1>Hello {data?.viewer?.login}!</h1>;
// }