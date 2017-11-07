module.exports = {
    addUser: function(req, res) {
        const db = req.app.get('db')
        db.run(
            `INSERT INTO users(auth_id, email)
            VALUES ($[auth_id], $[email])`
        ,
            {
            auth_id: req.body.id
            , email: req.body.email,
            }
        )
        .then(
            () => {res.status(200).end()}
        )
    }
    , getUsers: function(req, res) {
        const db = req.app.get('db')
        db.run(
            `SELECT *
            FROM users`
        )
        .then(
            resp => {res.status(200).json(resp)}
        )
    }
    , getUser: function(req, res) {
        const db = req.app.get('db')
        db.run(
            `SELECT *
            FROM users
            WHERE id = $[id]`
        ,
            {id: req.params.id}
        )
        .then(
            resp => {res.status(200).json(resp)}
        )
    }
    , updateUser: function(req, res) {
        const db = req.app.get('db')
        db.run(
            `UPDATE users
            SET email = $[email]
            WHERE id = $[id]`
        ,
            {
            id: req.params.id
            , email: req.body.email
            }
        )
        .then(
            () => {res.status(200).end()}
        )
    }
    , deleteUser: function(req, res) {
        const db = req.app.get('db')
        db.run(
            `DELETE
            FROM users
            WHERE id = $[id]`
        ,
            {id: req.params.id}
        )
        .then(
            () => {res.status(200).end()}
        )
    }
}