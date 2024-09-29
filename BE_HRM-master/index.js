import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import departmentRoute from './routes/Department.js';
import authRoute from './routes/Auth.js';
import employeeRoute from './routes/Employee.js';
import positionRoute from './routes/Position.js';
import payrollRoute from './routes/Payroll.js';
import leavereqRoute from './routes/LeaveReq.js';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use('/api/v1/Department', departmentRoute);
app.use('/api/v1/Auth', authRoute);
app.use('/api/v1/Employee', employeeRoute);
app.use('/api/v1/Position', positionRoute);
app.use('/api/v1/Payroll', payrollRoute);
app.use('/api/v1/LeaveReq', leavereqRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
});
  
app.listen(8080, () => {
    connect();
    console.log("Connected to backend.");
});