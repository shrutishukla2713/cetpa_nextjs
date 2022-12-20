//import UsersData from "../../../models/UsersData";
import Users from "../../../models/Users";
import connectDb from "../../../middleware/mongoose";


//PUT api call to find a single user
const handler = async(req, res) => {
    if(req.method == 'PUT') {
        console.log(req.body);
        try{
            
            let temp = new Users({
                _id: req.body.id,
               userid: req.body.userid,
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                password: req.body.password
            })
            Users.updateOne({ name: req.body.name,email: req.body.email,
                mobile: req.body.mobile,
                password: req.body.password }, req.body).then(result => {
                res.status(200).json({ message: "Update successful!" });
              });
            //const response = await temp.updateOne();

           // res.status(201).json(response);
        }
        catch(err){
            res.status(400).json({message: err.message})
        }        
    }
    else {
        res.status(400).json({message: 'Method not alloweed.'})
    }
}

export default connectDb(handler);