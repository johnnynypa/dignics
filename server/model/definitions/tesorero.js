export default (sequelize, DataTypes) => {
    return sequelize.define('tesoreros', {
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            isUnique: true,
            validate:{
                notEmpty:{
                    msg: "Digite el nombre de usuario"
                }
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    msg:"Digite la contraseña"
                }
            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
				isEmail: {msg: "Digite el correo electronico"}
			}
        }
    })
}