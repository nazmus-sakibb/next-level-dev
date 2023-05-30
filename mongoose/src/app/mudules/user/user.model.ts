import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";


// 2. Createing schema using interface
const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String, 
        required: true,
      },
    },

    dob: { type: String },
    gender: { type: String, enum: ["male", "female"] },
    email: { type: String },
    contact: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });

  // model
  const User = model<IUser>("User", userSchema);


  export default User;