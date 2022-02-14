console.clear();
const user=require("../models/user");
const Mongoose =require("mongoose");
var bcrypt = require('bcryptjs');
const DATABASE =async () => {
    try {
  await Mongoose.connect(
    'mongodb+srv://amine:7Kru2Z2k52CBmpnU@cluster0.ossy9.mongodb.net/The-area?retryWrites=true&w=majority',
    {
        useNewUrlParser : true , 
         useUnifiedTopology : true , 
        //  useFindAndModify: false,
         
         
      }, 
      async (err) => {
        if (err) console.log(err);
        else {
            console.log('connected to db!!')
            let admin = await user.findOne({
                role: 'admin',
                mail: 'admin@area.com',
                cin:"134256869"
            });
            if (!admin) {
                let password = 'adminpassword'
                const salt = await bcrypt.genSalt(10);
                const hashed = await bcrypt.hash(password, salt);
                let new_user = new user({
                  FirstName:'admin',
                  lastname:'admin',
                  mail:'admin@area.com',
                  password:hashed,
                  PhoneNumber:'29787582',
                  cin:"134256869",
                  gender:"Male",
                  role: 'admin',
                });
                 await new_user.save();
                 console.log(`Admin account has been added : ${admin.mail}`);
            }else{
                console.log(` Admin account already exist \n admin email : ${admin.mail}`);

            } 
            
        }

    }
    
    
    )
  console.log("database connect")
    }catch(error){
      console.log(error)
      
console.log("database is not connect");
    }
};
module.exports=DATABASE;