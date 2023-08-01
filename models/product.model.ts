import { Sequelize, DataTypes } from "sequelize";
import SequelizeConnection from "../dbConfig/db.config";

export const ProductModel = SequelizeConnection.define('product_list',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    productname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productinfo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    producttag: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productcategory: {
        type: DataTypes.STRING,
        allowNull: false
    },
    producttype: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productprice: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productmrp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    forgender: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps:true, createdAt: true, updatedAt: true, tableName:'product_list', schema: 'public', initialAutoIncrement: 'id'})

// if tag is new then add it in tag table on trigger when insert the data
// set indexes in the model
// validate the gender is male or female only it should add where the timestamp is added


ProductModel.sync({force: false}).then((reason)=>{
    console.log("product list table drop and created ")
});





