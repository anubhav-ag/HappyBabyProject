const mongoose = require('mongoose')

const userProductSchema = new mongoose.Schema({
    user_id: {
        type: String,
        unique: true
    },
    product_id: [String]
})

const UserProductModel = mongoose.model('User-Product', userProductSchema)

module.exports = UserProductModel
/*

  courses: [{type: Schema.Types.ObjectId, ref: "Course"}],
}
*/