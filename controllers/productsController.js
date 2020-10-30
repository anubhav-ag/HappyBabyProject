const _ = require('lodash')
const ProductModel = require('../models/products')

const productsController = {

    introPage: (req, res) => {
        res.render('products/intro', {
            pageTitle: "Happy Baby - Introduction"
        })
    },
    
    contactPage: (req, res) => {
        res.render('products/contact', {
            pageTitle: "Happy Baby - Contact Us"
        })
    },

listProducts: (req, res) => {
    ProductModel.find()
        .then(results => {
            res.render('products/index', {
                pageTitle: "List of Products",
                products: results
            })
        })
},
showProduct: (req, res) => {
    let slug = req.params.slug

    ProductModel.findOne({
        slug: slug
    })
        .then(result => {
            if (! result) {
                res.redirect('/products')
                return
            }

            // find associated ratings here
            ProductModel.find(
                {
                    product_slug: result.slug
                },
                {},
                {
                    sort: {
                        created_at: -1
                    }
                }
            )
                .then(ratingResults => {
                    res.render('products/show', {
                        pageTitle: "Show Product",
                        item: result,
                        //ratings: ratingResults
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.redirect('/products')
                })
        })
        .catch(err => {
            res.send(err)
        })
},
    newProduct: (req, res) => {
        res.render('products/new', {
            pageTitle: "Create New Shopping Item"
        })
    },

createProduct: (req, res) => {
    const slug = _.kebabCase(req.body.product_name)

    ProductModel.create({
        name: req.body.product_name,
        slug: slug,
        price: req.body.price,
        priority: req.body.priority,
        remarks: req.body.remarks,
        image: req.body.img_url
    })
        .then(result => {
            res.redirect('/products/' + slug)
        })
        .catch(err => {
            console.log(err)
            res.redirect('/products/new')
        })
},
showEditForm: (req, res) => {
    ProductModel.findOne({
        slug: req.params.slug
    })
        .then(result => {
            res.render('products/edit', {
                pageTitle: "Edit Form for " + result.name,
                item: result,
                itemID: result.slug
            })
        })
        .catch(err => {
            res.redirect('/products')
        })
},

    updateProduct: (req, res) => {
        const newSlug = _.kebabCase(req.body.product_name)

        // find the document in DB,
        // to ensure that whatever the user
        // wants to edit, is actually present
        ProductModel.findOne(
            {
                slug: req.params.slug
            }
        )
            .then(result => {

                ProductModel.update(
                    {
                        slug: req.params.slug
                    },
                    {
                        name: req.body.product_name,
                        slug: newSlug,
                        price: req.body.price,
                        priority: req.body.priority,
                        remarks: req.body.remarks,
                        image: req.body.img_url
                    }
                )
                    .then(updateResult => {
                        res.redirect('/products/' + newSlug)
                    })
                    .catch(err => {
                        console.log(err)
                        res.redirect('/products')
                    })

            })
            .catch(err => {
                console.log(err)
                res.redirect('/products')
            })
    },

    deleteProduct: (req, res) => {
        ProductModel.findOne(
            {
                slug: req.params.slug
            }
        )
            .then(result => {

                ProductModel.deleteOne({
                    slug: req.params.slug
                })
                    .then(deleteResult => {
                        res.redirect('/products')
                    })
                    .catch(err => {
                        console.log(err)
                        res.redirect('/products')
                    })

            })
            .catch(err => {
                console.log(err)
                res.redirect('/products')
            })
    }
}

module.exports = productsController
