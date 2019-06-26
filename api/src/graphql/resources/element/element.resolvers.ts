import { Transaction } from "sequelize";

import { GraphQLResolveInfo } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { ElementInstance } from "../../../models/ElementModel";
import { handleError, throwError } from "../../../utils/utils";
import { compose } from "../../composable/composable.resolver";
import { authResolvers } from "../../composable/auth.resolver";
import { AuthUser } from "../../../interfaces/AuthUserInterface";

export const elementResolvers = {
  Element: {
    author: (
      element,
      args,
      { db }: { db: DbConnection },
      info: GraphQLResolveInfo
    ) => {
      return db.User.findById(element.get("author")).catch(handleError);
    },

    post: (
      element,
      args,
      { db }: { db: DbConnection },
      info: GraphQLResolveInfo
    ) => {
      return db.Post.findById(element.get("post")).catch(handleError);
    }
  },

  Query: {
    elements: (
      parent,
      { first = 10, offset = 0 },
      { db }: { db: DbConnection },
      info: GraphQLResolveInfo
    ) => {
      return db.Element.findAll({
        limit: first,
        offset: offset
      }).catch(handleError);
    },

    element: (
      parent,
      { id },
      { db }: { db: DbConnection },
      info: GraphQLResolveInfo
    ) => {
      id = parseInt(id);
      return db.Element.findById(id)
        .then((element: ElementInstance) => {
          throwError(!element, `Element with id ${id} not found`);
          return element;
        })
        .catch(handleError);
    },

    elementsByPost: (parent, {postId, first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      postId = parseInt(postId);
      return db.Element.findAll({
        where: {post: postId},
        limit: first,
        offset: offset
      })
      .catch(handleError);
    }
  },

  Mutation: {
    createElement: compose(...authResolvers)(
      (
        parent,
        { input },
        { db, authUser }: { db: DbConnection; authUser: AuthUser },
        info: GraphQLResolveInfo
      ) => {
        input.author = authUser.id;
        return db.sequelize
          .transaction((t: Transaction) => {
            return db.Element.create(input, { transaction: t });
          })
          .catch(handleError);
      }
    ),

    updateElement: compose(...authResolvers)(
      (
        parent,
        { id, input },
        { db, authUser }: { db: DbConnection; authUser: AuthUser },
        info: GraphQLResolveInfo
      ) => {
        id = parseInt(id);
        return db.sequelize
          .transaction((t: Transaction) => {
            return db.Element.findById(id).then((element: ElementInstance) => {
              throwError(!element, `Post with id ${id} not found`);
              throwError(
                element.get("author") != authUser.id,
                "Unauthorized! You can only edit posts by yourself"
              );
              input.author = authUser.id;
              return element.update(input, { transaction: t });
            });
          })
          .catch(handleError);
      }
    ),

    deleteElement: compose(...authResolvers)(
      (
        parent,
        { id },
        { db, authUser }: { db: DbConnection; authUser: AuthUser },
        info: GraphQLResolveInfo
      ) => {
        id = parseInt(id);
        return db.sequelize
          .transaction((t: Transaction) => {
            return db.Element.findById(id).then((element: ElementInstance) => {
              throwError(!element, `Post with id ${id} not found`);
              throwError(
                element.get("author") != authUser.id,
                "Unauthorized! You can only edit posts by yourself"
              );
              return element.destroy({ transaction: t });
              //.then(element => !!element);
            });
          })
          .catch(handleError);
      }
    )
  }
};
