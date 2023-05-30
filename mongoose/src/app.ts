import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// application routes
import userRoutes from './app/mudules/user/user.route';

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRoutes);
app.use('/api/v1/user', userRoutes);

export default app;



/*
1. interface - interface.ts
2. schema, model - model.ts
3. route
4. route function - controller.ts
5. database query function - service.ts
*/
