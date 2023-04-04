import { Schema,model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String
    }
},{
    timestamps: true
});

userSchema.index({ email: 1 });

userSchema.pre("save",async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function (email,password) {
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        };
        throw Error("Incorrect Password");
    };
    throw Error("Incorrect Email Id");
};

const collectionName = "user";

const user = model.user || model('user',userSchema,collectionName);

export default user;