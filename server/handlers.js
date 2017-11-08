module.exports = {
  addUser: function(req, res) {
    const db = req.app.get('db')
    db
      .run(
        `INSERT INTO users(auth_id, email)
            VALUES ($[auth_id], $[email])`,
        {
          auth_id: req.body.id,
          email: req.body.email
        }
      )
      .then(() => {
        res.status(200).end()
      })
  },
  getUsers: function(req, res) {
    const db = req.app.get('db')
    db
      .run(
        `SELECT *
            FROM users`
      )
      .then(resp => {
        res.status(200).json(resp)
      })
  },
  getUser: function(req, res) {
    const db = req.app.get('db')
    db
      .run(
        `SELECT *
            FROM users
            WHERE id = $[id]`,
        { id: req.params.id }
      )
      .then(resp => {
        res.status(200).json(resp)
      })
  },
  updateUser: function(req, res) {
    const db = req.app.get('db')
    db
      .run(
        `UPDATE users
            SET email = $[email]
            WHERE id = $[id]`,
        {
          id: req.params.id,
          email: req.body.email
        }
      )
      .then(() => {
        res.status(200).end()
      })
  },
  deleteUser: function(req, res) {
    const db = req.app.get('db')
    db
      .run(
        `DELETE
            FROM users
            WHERE id = $[id]`,
        { id: req.params.id }
      )
      .then(() => {
        res.status(200).end()
      })
  },
  getRunsByType: function(req, res) {
    // Replace this with logged in user's ID.
    const userId = 2
    req.app
      .get('db')
      .run(
        `
        SELECT
          r.owner_id,
          count(r.owner_id),
          u.display_name
        FROM users u
        JOIN runs r
        ON r.owner_id = u.id
        WHERE r.type_id = ${userId}
        GROUP BY
          r.owner_id,
          u.display_name
        `
      )
      .then(runs => {
        res.json(
          runs.map(x => ({
            ownerId: x.owner_id,
            displayName: x.display_name,
            count: x.count
          }))
        )
      })
      .catch(error => {
        console.log('error', error)
        res.status(500).json({
          message:
            "An unexpected error occurred. For security reasons, it' can't be disclosed"
        })
      })
  }
}
