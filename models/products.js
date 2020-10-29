const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
    },
    image: String,
    votes: String,
    percentage: String

})

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel
