import gql from "graphql-tag";

export const CREATE_TOKEN = gql`
  mutation createToken($email: String!, $password: String!) {
    token
  }
`;

export const CREATE_USER = gql`
    mutation createUser(input: {
        $name: String!
        $email: String!
        $password: String! 
    }){
      id
      name
      email
      photo
      createdAt
    }
`;
