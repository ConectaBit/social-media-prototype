import gql from 'graphql-tag';

export const USERS = gql `
    query{
        users(first: 10, offset: ${offset} || 0){
            id
            name
            email
            photo
            posts{
                id
            }
        }
    }
`;

export const USER = gql `
    query{
	user(id: ${userID}){
    id
    name
    email
    photo
    posts{
      id
    }
  }
}
`;