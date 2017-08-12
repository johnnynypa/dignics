export default (sequelize, DataTypes) => {
    return sequelize.define('gastos', {
        descripcion:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    msg: "Digite la descripcion"
                }
            }
        },
        monto:{
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate:{
                notEmpty:{
                    msg: "Digite el monto del gasto"
                }
            }
        },
        fecha:{
            type: DataTypes.DATEONLY, //YYY-MM-DD,
            allowNull:false,
            validate:{
				notEmpty: {msg: "Digite la fecha en que se pagó el gasto"}
			}
        }
    })
}