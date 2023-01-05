const mongoose = require('mongoose');

const orderModel = mongoose.Schema(
    {
        customers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
       }],
       menuItems: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'MenuItems',
       }]
    },
);

const Order = mongoose.model('Order', orderModel);
module.exports = Order;