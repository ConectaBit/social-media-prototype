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
    }
  },

  Query: {
      
  }
};
