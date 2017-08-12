export default (sequelize, DataTypes) => {
    return sequelize.define('divisions', {
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