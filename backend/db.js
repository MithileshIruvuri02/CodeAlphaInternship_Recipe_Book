const mongoose=require('mongoose');

// const mongoURI="mongodb://localhost:27017";

const connectToMongo=async()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/inotebook") 
    //   try{
    //     console.log("Connected to mongo successfully");
    //   }  catch(error){ console.log(error)}
        .then((success)=>console.log('Connected successfully'))
        .catch((err)=>console.log(err.message));
    // })
}

module.exports=connectToMongo;