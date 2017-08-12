export default (sequelize, DataTypes) => {
    return sequelize.define('personas', {
        name1:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    msg: "Digite el primer nombre"
                }
            }
        },
        name2:{
            type: DataTypes.STRING
        },
        last_name1:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    msg:"Digite el primer apellido"
                }
            }
        },
        last_name2:{
            type: DataTypes.STRING
        },
        doc:{
            type:DataTypes.STRING
        }
    })
}