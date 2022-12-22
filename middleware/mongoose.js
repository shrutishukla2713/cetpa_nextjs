import mongoose from "mongoose";

const connectDb = handler => async(req, res) => {
    if(mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    await mongoose.connect(process.env.MONGO_URI)
    return handler(req, res);
}

export default connectDb;


// db location
// db name
// usernames
// password


// mongodb+srv://testuser001:<password>@cluster0.2eq41.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://testuser001:z9xsFuktzYAs4fMk@cluster0.2eq41.mongodb.net/ecommerce?retryWrites=true&w=majority