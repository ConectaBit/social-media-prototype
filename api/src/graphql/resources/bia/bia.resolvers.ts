import { GraphQLResolveInfo } from "graphql";
const fetch = require('isomorphic-fetch')

export const biaResolvers = {
  Query: {
    biology: (parent, { start = 1 }, info: GraphQLResolveInfo) => {
      return fetch(`https://bia-api.herokuapp.com/api/biology/1`).then(res =>
        res.json()
      );
    }
  }
};
