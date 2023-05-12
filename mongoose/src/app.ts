import express, { Application, NextFunction, Request, Response } from "express";
import cors from 'cors';

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
            middleName: string,
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
});


export default app;
