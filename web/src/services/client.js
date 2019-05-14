import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';

const httpLink = new HttpLink({uri: 'http://localhost:3001/graphql'});

const authLink = new ApolloLink((operation, forward) => {
    //Retrieve the authorization token from local storage

        const token = localStorage.getItem('access-token');
        const uid = localStorage.getItem('uid');
        const client = localStorage.getItem('client');

        //Use the setContext method to set HTTP headers

        operation.setContext({
            headers: {
                'access-token': token ? `${token}` : '',
                'uid': uid ? `${uid}` : '',
                'client': client ? `${client}` : ''
            }
        });

        return forward(operation);
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;
