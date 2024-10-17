
import mongoose, { Schema, model, models  } from "mongoose";
const uri = process.env.MONGODB_USER_URI as string

const clientOptions = { 
  serverApi: { 
    version: '1' as const, 
    strict: true, 
    deprecationErrors: true 
  },
  serverSelectionTimeoutMS : 100000
};

const userSchema = new Schema({
  email : String
},{
  timestamps : true
})

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    // await mongoose.connection.db.admin().command({ ping: 1 });
    mongoose.Promise = global.Promise;
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

const User = models.User || model("User", userSchema, "users");
export { User }
