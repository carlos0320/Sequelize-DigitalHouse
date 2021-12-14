const db = require('../database/models')

const genreController = {
    list: (req, res) => {
        // Se deberán listar todas las películas de la base de datos.
        db.genres.findAll()
            .then(genres => {
                res.render('genresList', { genres })
            })
            .catch(err => {
                res.send(err)
            })
    },

    detail: (req, res) => {
        // Detalle de la película. Se deberá mostrar la película correspondiente al id que aparezca en la URL
        db.genres.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail', { genre })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = genreController