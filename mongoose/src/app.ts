import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // inserting a test data into mongodb

  /**
   * 1. Interface    -- done
   * 2. Schema    -- done
   * 3. Model
   * 4. Database query
   */

  //   res.send("Hello World");
  //   next();

  // 1. crating an interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dob: string;
    gender: "male" | "female";
    email?: string;
    contact: string;
    emergencyContact: string;
    presentAddress: string;
    permanentAddress: string;
  }

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

  const User = model<IUser>("User", userSchema);

  const createUserToDB = async () => {
    const user = new User({
      id: "911",
      role: "student",
      password: "PassPass",
      name: {
        firstName: "Nazmus",
        middleName: "Sakib",
        lastName: "Abir",
      },
      gender: "male",
      email: "abc@gmail.com",
      contact: "0188888888",
      emergencyContact: "0199999999",
      presentAddress: "Uganda",
      permanentAddress: "USA",
    });
    await user.save();
    console.log(user);
  };

  createUserToDB();

  res.send("Hello world");
});

export default app;
