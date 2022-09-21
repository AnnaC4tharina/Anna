
import {Model, DataTypes} from "sequelize"

import { sequelize } from '../instances/mysql'

export interface produtoInterface extends Model{

    codProdutos:number
    produto: string
    dataDaDoacao: Date
    dataDaPublicacao: Date
    descricao: string

}

export const tbprodutos = sequelize.define<produtoInterface>("produto,",{
    codProdutos:{
        primaryKey:true,
       type:DataTypes.INTEGER
   },
    produto:{
        type:DataTypes.STRING
    },
    dataDaDoacao:{
        type:DataTypes.DATE
    },
    dataDaPublicacao:{
        type:DataTypes.DATE
    },
    descricao:{
        type:DataTypes.DATE
    },
},{
    tableName:'tbprodutos',
    timestamps:false
})