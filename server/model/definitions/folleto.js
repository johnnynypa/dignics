export default (sequelize, DataTypes) => {
    return sequelize.define('folletos', {
        diezmo:{
            type: DataTypes.DOUBLE
        },
        ofrenda:{
            type: DataTypes.DOUBLE
        },
        protemplo:{
            type: DataTypes.DOUBLE
        },
        otro:{
            type: DataTypes.DOUBLE
        },
        descripcion:{
            type: DataTypes.STRING
        },
        fecha:{
            type: DataTypes.DATEONLY, //YYY-MM-DD,
            allowNull:false,
            validate:{
				notEmpty: {msg: "Digite la fecha del folleto"}
			}
        }
    })
}