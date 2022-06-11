const User = require("../models/userModel")
const dotenv = require("dotenv")
dotenv.config()


exports.addAccount = async (req,res) => {
  try{  

    let {account,balance} = req.body;
    balance = Number(balance);

    const existingUser = await User.findOne({account});

    if(existingUser){
      const data = existingUser.balance;
      const updatedBalance = (balance + data);
      await User.updateOne({account}, {$set:{balance:updatedBalance}})
      res.send(existingUser);
      return;
    }

    const newUser = new User({
      account,
      balance,
    })

    const savedUser = await newUser.save()

    res.send(savedUser)

  }catch(err){
    console.log(err)
  }
}

exports.getAccount = async (req,res) => {
  try{
    const {account} = req.body;
    const data = await User.findOne({account})
    if(!data){
      return res.json({errorMessage: "Not Found"});
    }
    
    res.send(data)
  }catch(err){
    console.log(err)
  }
}





