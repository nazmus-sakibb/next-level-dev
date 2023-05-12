import express, { Application, NextFunction, Request, Response } from "express";
import cors from 'cors';
import { Schema } from "mongoose";

const app: Application = express();

// using cors
app.use(cors());


// parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response, next: NextFunction) => {

    // inserting a test data into mongodb

    /**
     * 1. Interface
     * 2. Schema
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
            firstName: string,
            middleName?: string,
            lastName: string,
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
        id: {type: String, required: true, unique: true },
        role: {type: String, required: true},
        password: {type: String, required: true},
        name: {
            firstName: {
                type: String, 
                required: true
            },
            middleName: {
                type: String,
            },
            lastName: {
                type: String,
                required: true
            }
        },

        dob: { type: String },
        gender: {type: String, enum: ['male', 'female']}, 
        email: {type: String},
        contact: { type: String, required: true },
        emergencyContact: { type: String, required: true },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true }
    });
});


export default app;
