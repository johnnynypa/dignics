export default (sequelize, DataTypes) => {
    return sequelize.define('unions', {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    msg: "Digite el nombre"
                }
            }
        }
    })
}