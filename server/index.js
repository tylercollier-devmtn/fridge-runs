require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const session = require('express-session') // dev only, not for production
const massive = require('massive')
const handlers = require('./handlers')
const cors = require('cors')
// const passport = require('passport')
// const Auth0Strategy = require('passport-auth0')

// express
const app = express()
app.listen(process.env.SERVER_PORT, () =>
  console.log(`app listening on port ${process.env.SERVER_PORT}`)
)

// don't forget to run nsp check (and possibly snyk test and maybe snyk wizard)
// helmet - security best practice
app.use(helmet())

// body-parser puts json on the req.body
app.use(express.json())

// does proxy value in client code package.json should avoid needing this?
// this proxy value may only work with create-react-app?
if (process.env.NODE_ENV === 'development') {
  app.use(cors())
}

// sessions
const sess = {
  secret: process.env.SECRET,
  name: 'session',
  cookie: {
    maxAge: 60 * 60 * 1000 // one hour
  },
  resave: false,
  saveUninitialized: false
}
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1)
  sess.cookie.secure = true
  sess.cookie.domain = process.env.DOMAIN
}
app.use(session(sess))

// massive
const connectionInfo = process.env.DB_CONNECTION_STRING
massive(connectionInfo).then(instance => {
  app.set('db', instance)
})

// passport - Auth0
// const strategy = new Auth0Strategy(
//     {
//         domain: process.env.AUTH0_DOMAIN
//         , clientID: process.env.AUTH0_CLIENT_ID
//         , clientSecret: process.env.AUTH0_CLIENT_SECRET
//         , callbackURL: '/callback'
//     }
//     ,
//     (accessToken, refreshToken, extraParams, profile, done) => {
//         return done(null, profile)
//     }
// )
// passport.use(strategy)
// passport.serializeUser((user, done) => {done(null, user)})
// passport.deserializeUser((user, done) => {
//     done(null, user)
// })
// app.use(passport.initialize())
// app.use(passport.session())
// app.get(
//     '/login'
// ,
//     passport.authenticate('auth0', {})
// ,
//     (req, res) => {
//         res.redirect('/')
//     }
// )
// app.get(
//     '/callback'
// ,
//     passport.authenticate('auth0', {failureRedirect: '/login'})
// ,
//     (req, res) => {
//         if (!req.user) {
//             throw new Error('user null')
//         }
//         res.redirect('/')
//     }
// )

// endpoints
// app.post('/api/users/', handlers.addUser)
// app.get('/api/users', handlers.getUsers)
// app.get('/api/users/:id', handlers.getUser)
// app.patch('/api/users/:id', handlers.updateUser)
// app.delete('/api/users/:id', handlers.deleteUser)
