import * as Sequelize from "sequelize";

import { BaseModelInterface } from "../interfaces/BaseModelInterface";
import sequelize = require("sequelize");
import { ModelsInterface } from "../interfaces/ModelsInterface";

export interface ElementAttributes {
  id?: number;
  description?: string;
  name?: string;
  //tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ElementInstance
  extends Sequelize.Instance<ElementAttributes> {}

export interface ElementModel
  extends BaseModelInterface,
    Sequelize.Model<ElementInstance, ElementAttributes> {}

export default (
  Sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): ElementModel => {
  const Element: ElementModel = Sequelize.define(
    "Element",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      //tags: {
      //  type: DataTypes.ARRAY(DataTypes.STRING),
      //  allowNull: true
      //}
    },
    {
      tableName: "elements"
    }
  );

  return Element;
};
