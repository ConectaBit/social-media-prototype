import { GraphQLResolveInfo } from "graphql";
const fetch = require("isomorphic-fetch");

export const biaResolvers = {
  Query: {
    biology: (parent, { start = 1 }, info: GraphQLResolveInfo) => {
      return fetch(`https://bia-api.herokuapp.com/api/biology/${start}`).then(
        res => res.json()
      );
    },

    chemistry: (parent, { start = 1 }, info: GraphQLResolveInfo) => {
      return fetch(`https://bia-api.herokuapp.com/api/chemistry/${start}`).then(
        res => res.json()
      );
    },

    mathematics: (parent, { start = 1 }, info: GraphQLResolveInfo) => {
      return fetch(
        `https://bia-api.herokuapp.com/api/mathematics/${start}`
      ).then(res => res.json());
    },

    phisics: (parent, { start = 1 }, info: GraphQLResolveInfo) => {
      return fetch(
        `https://bia-api.herokuapp.com/api/phisics/${start}`
      ).then(res => res.json());
    }
  }
};
