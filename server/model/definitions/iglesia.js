export default (sequelize, DataTypes) => {
    return sequelize.define('iglesias', {
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