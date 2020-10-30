const UserModel = require('../models/users')
const ProductModel = require('../models/products')
const UserProductModel = require('../models/userproduct')

const uuid = require('uuid')
const SHA256 = require("crypto-js/sha256")
const session = require('express-session')
const { result } = require('lodash')

const controllers = {
    showRegistrationForm: (req, res) => {
        res.render('users/register', {
            pageTitle: 'Register as a User'
        })
    },

    showLoginForm: (req, res) => {
        res.render('users/login', {
            pageTitle: 'User Login'
        })
    },
    
    register: (req, res) => {
        // validate the users input
        // not implemented yet, try on your own

        UserModel.findOne({
            email: req.body.email
        })
            .then(result => {
                // if found in DB, means email has already been take, redirect to registration page
                if (result) {
                    res.redirect('/users/register')
                    return
                }

                // no document found in DB, can proceed with registration

                // generate uuid as salt
                const salt = uuid.v4()

                // hash combination using bcrypt
                const combination = salt + req.body.password

                // hash the combination using SHA256
                const hash = SHA256(combination).toString()

                // create user in DB
                UserModel.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    pwsalt: salt,
                    hash: hash
                })
                    .then(createResult => {
                        UserProductModel.create({
                            user_id: createResult._id
                        })
                    
                    })
                    .then(createUserProduct => {
                        res.redirect('/products')
                    })
                    .catch(err => {
                        res.redirect('/users/register')
                    })

            })
            .catch(err => {
                console.log(err)
                res.redirect('/users/register')
            })
    },
    
    login: (req, res) => {
        // validate input here on your own

        // gets user with the given email
        UserModel.findOne({
            email: req.body.email
        })
            .then(result => {
                // check if result is empty, if it is, no user, so login fail, redirect to login page
                if (!result) {
                    console.log('error: no result')
                    res.redirect('/users/login')
                    return
                }
                // combine DB user salt with given password, and apply hash algo
                const hash = SHA256(result.pwsalt + req.body.password).toString()

                // check if password is correct by comparing hashes
                if (hash !== result.hash) {
                    console.log('err: hash does not match')
                    res.redirect('/users/login')
                    return
                }

                // login successful

                //set session user

                req.session.user = result
                res.redirect('/users/dashboard')
            })
            .catch(err => {
                console.log(err)
                res.redirect('/user/login')
            })
    },

    dashboard: (req, res) => {
        if ( ! req.session || ! req.session.user ) {
            res.redirect('/users/login')
            return
        }
        UserProductModel.findOne({
            user_id: req.session.user._id
        })
        .then(results => {
            res.render('users/dashboard',{
                pageTitle: 'User Dashboard',
            }
        )})

    },
    addtoCart : (req, res) => {
        // get product_id from body
        product_id = req.body.product_id
        // validate that product exists in products collection - done
        ProductModel.findOne({
          _id: product_id
        })
        .then(results => {
            console.log(results._id)
            if (results._id != product_id) {
            // - If not exists, return error
                console.log('err: no result line 141')
                res.redirect('/users/cart')
                return
            }
            else
        UserProductModel.findOne ({
            // Find document in UserProducts collection
            user_id: req.session.user._id
        })
        .then(checkResult => {
            if(checkResult === null) {
                UserProductModel.create ({
                    user_id: req.session.user._id,
                    product_id:[results.id],
                    function (error, success) {
                        if (error) {
                            console.log(error);
                        } else {console.log(success);
                        }
                    }
                })
                          res.render("users/cart", {
                              pageTitle: 'User-cart',
                              products: results._id
                            })
            }
            else (checkResult.user_id === req.session.user._id) 
                {UserProductModel.findOneAndUpdate ({
                    user_id: req.session.user._id},
                    {$addToSet: {  product_id: results.id } },
                    function (error, success) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(success);
                        }
                    })
                    .then(results => {
                        getUserProducts(req.session.user._id)
                           .then(userProduct=>{
                               res.render('users/cart',{
                                   pageTitle: 'User-Cart',
                                   products: userProduct
                           })
                       })
                   })
        }})
        .catch(err => {
            console.log(err)
            res.redirect('/users/login') //change redirect path
        })
    })
    },

    userCart: (req, res) => {
        UserProductModel.findOne({
            user_id: req.session.user._id
        })
        .then(result => {
            ProductModel.find ({
            _id: { $in: result.product_id}
            })
            .then(results => {
                 getUserProducts(req.session.user._id)
                    .then(userProduct=>{
                        res.render('users/cart',{
                            pageTitle: 'User-Cart',
                            products: userProduct
                    })
                })
            })
        })
    },
 
    
deleteFromCart: (req, res) => {
    UserProductModel.findOneAndUpdate ({
        user_id: req.session.user._id},
        {$pull: { product_id: req.body.product_id } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        })
                    .then(deleteResult => {
                        //console.log("219 ",deleteResult)
                        getUserProducts(req.session.user._id)
                        .then(userProduct=>{
                            //console.log("I AM HERE   ", userProduct)
                        res.render('users/cart',{
                            pageTitle: 'User-Cart',
                            products: userProduct
                        })
                        })
                    })
                    .catch(err => {
                        console.log("delete error ",err)
                        getUserProducts(req.session.user._id)
                        .then(userProduct=>{
                            //console.log("I AM HERE   ", userProduct)
                        res.render('users/cart',{
                            pageTitle: 'User-Cart',
                            products: userProduct
                        })
                    })
                })
    },
    
logout: (req, res) => {
        req.session.destroy()
        res.redirect('/users/login')
    },
}

function getUserProducts(user){
    return UserProductModel.findOne({
        user_id: user
    })
    .then(userDocument=>{
    return userDocument.product_id
    } )
    .then(productIdArray => {
        return ProductModel.find(
            {
                _id: { $in: productIdArray}
            }
        )
        
    })
}

module.exports = controllers