
import mongoose,  { Schema, model, models, Model } from "mongoose";



export interface IUser {
  email: string;
}

export interface TestDocument extends IUser, mongoose.Document {
  createdAt: Date;
}

const userSchema = new Schema({
  email : {
    type : String,
    required : true
  }
},{
  timestamps : true
})


const User : Model<TestDocument> = models.User || model<TestDocument>("User", userSchema, "users");

export { User }
