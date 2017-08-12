export default (sequelize, DataTypes) => {
    return sequelize.define('tipo_gastos', {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    msg: "Digite el tipo de gasto"
                }
            }
        }
    })
}