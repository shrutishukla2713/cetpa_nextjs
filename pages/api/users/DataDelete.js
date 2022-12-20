import Users from "../../../models/Users";

import connectDB from "../../../middleware/mongoose";   

// DELETE API

const handler = async(req, res) => {
    if(req.method == 'DELETE') {
        console.log(req.body);
        try{
            
            let temp = new Users({
                _id: req.body.id,
               userid: req.body.userid,
                
            })
            Users.deleteOne({  userid: req.body.userid,  }, req.body).then(result => {
                res.status(200).json({ message: "Delete successful!" });
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

 
 
 
 export default connectDB(handler);