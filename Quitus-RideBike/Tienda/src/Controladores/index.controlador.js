const indexCtrl = {};
const pool = require('../configuracionBaseDatos/baseDatos.sql')
const orm = require('../configuracionBaseDatos/baseDatos.orm')

indexCtrl.mostrar = (req, res) => {
    res.render('index');
};

indexCtrl.mandar = async (req, res) => {
    const {validar} = req.body
    const validacion = await orm.usuarios.findOne({ where: {username: validar}})
    if(validacion){
        const validaciones = validacion
        if(validaciones.username !== null){
            res.redirect('/Login/'+ validaciones.idUsuarios);
        }else{
            res.flash('success', 'no tiene un usuario con esa cuenta porfavor registrese')
            res.redirect('/Registro')
        }
    }else{
        res.redirect('/Registro')
    }
}

module.exports = indexCtrl;