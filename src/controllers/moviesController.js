const db = require('../database/models/index.js');

const moviesController = {
    list: (req, res) => {
        db.movies.findAll()
            .then(movies => {
                res.render('moviesList', { movies })
            })
             .catch(err => console.log(err))
    },

    detail: (req, res) => {
        db.movies.findByPk(req.params.id)
            .then( movie => {
                res.render('moviesDetail', { movie })
            })
            .catch(err => console.log(err))
    },

    new: (req, res) => {
        db.movies.findAll({
            order: [['release_date', 'DESC']]
        })
        .then(movies => {
           res.render('newestMovies', { movies })
        })
        .catch(err => console.log(err))
    },

    recommended: (req, res) => {
        db.movies.findAll({
            limit: 5,
            order: [['release_date', 'ASC']]
        })
        .then(movies => {
           res.render('newestMovies', { movies })
        })
         .catch(err => console.log(err))
    },
}
    


module.exports = moviesController