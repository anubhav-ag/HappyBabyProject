// =======================================
//              DEPENDENCIES
// =======================================

require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const uuid = require('uuid')
//const bcrypt = require('bcrypt')
const session = require('express-session')

const app = express()
const port = 5000

const productsController = require('./controllers/ProductsController')
//const productsRatingsController = require('./controllers/ProductRatingsController')
const usersController = require('./controllers/UsersController')

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
mongoose.set('useFindAndModify', false)

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({
  extended: true
}))


app.use(session({
  secret: process.env.SESSION_SECRET,
  name: "app_session",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 3600000 } // 3600000ms = 3600s = 60mins, cookie expires in an hour
}))

app.use(setUserVarMiddleware)

// =======================================
//                  ROUTES
// =======================================

//PRODUCT RUOTES

//landing page route
app.get('/introduction', productsController.introPage)

//contact us page
app.get('/contact', productsController.contactPage)


// index route
app.get('/products', productsController.listProducts)

// new route
app.get('/products/new', productsController.newProduct)

//show route
app.get('/products/:slug', productsController.showProduct)

// create route
app.post('/products', productsController.createProduct)

// edit route
app.get('/products/:slug/edit', productsController.showEditForm)

//update route
app.patch('/products/:slug', productsController.updateProduct)

// delete route
app.delete('/products/:slug', productsController.deleteProduct)

//USER ON-BOARDING ROUTES

// user registration form route
app.get('/users/register', guestOnlyMiddleware, usersController.showRegistrationForm)

//user reg
app.post('/users/register', guestOnlyMiddleware, usersController.register)

// user login form route
app.get('/users/login',guestOnlyMiddleware, usersController.showLoginForm)

// user login route
app.post('/users/login', guestOnlyMiddleware, usersController.login)

//USER ONLY ROUTES
//user dahsboard
app.get('/users/dashboard', authenticatedOnlyMiddleware, usersController.dashboard)

//user cart
app.get('/users/cart', authenticatedOnlyMiddleware, usersController.userCart)

// create new POST route to submit the item into the cart
app.post('/users/cart', authenticatedOnlyMiddleware, usersController.addtoCart)

//user logout
app.post('/users/logout',authenticatedOnlyMiddleware, usersController.logout)

//delete route from cart
app.delete('/users/cart', authenticatedOnlyMiddleware, usersController.deleteFromCart)

// =======================================
//          SERVER CONNECTION
// =======================================

// connect to DB, then inititate Express app
mongoose.connect( mongoURI, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then(response => {
    // DB connected successfully
    console.log('DB connection successful')

    app.listen(process.env.PORT || port, () => {
      console.log(`To Do List app listening on port: ${port}`)
    })
  })
  .catch(err => {
    console.log(err)
  })

// =======================================
//                MIDDLEWARE
// =======================================

  function authenticatedOnlyMiddleware(req, res, next) {
    if ( ! req.session || ! req.session.user ) {
      res.redirect('/users/login')
      return
    }
  next()
  }
  
function guestOnlyMiddleware(req, res, next) {
    //check if user is logged in.
    //if logged in, redirect back to dashboard
  if (req.session && req.session.user) {
    res.redirect('/users/dashboard')
    return
  }
  next()
}

function setUserVarMiddleware(req, res, next) {
  // default user template var set to null
  res.locals.user = null

  // check if req.session.user is set,
  // if set, template user var will be set as well
  if (req.session && req.session.user) {
    res.locals.user = req.session.user
  }

  next()
}