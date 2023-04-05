import { GenResObj } from "../helper/responseFormatter.js";
import { httpStatusCodes } from "../helper/statusCodeFormatter.js";
import Cart from "../models/cart.schema.js";

export const createCart = async (req) => {
    try {
        let payload = req.body, { user } = req.body;

        let checkCard = Cart.findOne({ user });
        if (checkCard) {
            const cart = await Cart.findOneAndUpdate({ user }, { $set: payload }, { new: true });
            console.log({ cart })
            return GenResObj(httpStatusCodes.ACCEPTED, true,"cart updated successfully",cart);
        } else {
            const cart = await Cart.create(payload);
            console.log({ cart })
            return GenResObj(httpStatusCodes.CREATED, true,"cart created successfully", cart);
        }
    } catch (err) {
        console.log({ err })
        return GenResObj(httpStatusCodes.INTERNAL_SERVER, false, err.message)
    }
};

export const cartDetail = async (req) => {
    try {
        let { user } = req.body;
        let cart =await Cart.findOne({ user });
        console.log({ cart })
        return GenResObj(httpStatusCodes.OK, true,"cart details",cart);

    } catch (err) {
        console.log({ err })
        return GenResObj(httpStatusCodes.INTERNAL_SERVER, false, err.message)
    }
}