import { Schema,model } from "mongoose";

const cartSchema = new Schema({
    orderId:{
        type: String,
    },
    products:{
        type: Array,
    },
    user:{
        type: Schema.Types.ObjectId, ref: 'user'
    }
},{
    timestamps: true
});

const collectionName = "cart";

const cart = model.cart || model('cart',cartSchema,collectionName);

export default cart;