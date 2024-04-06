const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const Fruits = new Scheme({
    name: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    image: { type: Array },
    id_distributor: { type: Scheme.Types.ObjectId, ref: 'distributor' },

}, {
    timestamps: true
})
module.exports = mongoose.model('fruit', Fruits)