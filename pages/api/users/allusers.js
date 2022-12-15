import Users from "../../../models/Users";

import connectDb from "../../../middleware/mongoose";
//http://localhost:3000/api/users/allusers
const handler = async(req, res) => {
        try{   
            console.log('inside all users.')
            let data = await Users.find({}); 
            //sql syntax for db
            //mysql.promise().query('SELECT * FROM ......')
            res.status(200).json(data);
        }
        catch(err){
            res.status(400).json({message: err.message})
        }        
}

export default connectDb(handler);
