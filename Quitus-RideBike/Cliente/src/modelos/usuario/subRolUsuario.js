const subrolUsuario = (sequelize, type) =>{
    return sequelize.define('subRolUsuarios', {
        idSubRolUsuario:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreSubRolUsuario: type.STRING,
        estadoSubRolUsuario: type.STRING,
        creacionSubRolUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionSubRolUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = subrolUsuario