import { Request, Response } from 'express';
import { studentServices } from './student.service';
// import { error } from 'console';
// import Joi from 'joi';
// import { z } from "zod";
import studentValidationSchema from './student.zod.validation';
// import studentValidationSchema from './student.validation';



const createStudent = async (req: Request, res: Response) => {
  try {
    //crating a schema validation using joi

    



    const { student: studentData } = req.body;

    //data validation using joi
    // const{error,value}=studentValidationSchema.validate(studentData);
    // console.log(error ,'  ---' , value);

   //data validation using zod
    const zodParseData =studentValidationSchema.parse(studentData)




     //will call service function to send this data
     const result = await studentServices.createStudentIntoDB(zodParseData);

    // if(error){
    //   res.status(500).json({
    //     success: false,
    //     message: 'something went wrong',
    //     error
    //   })
    // }
   

    //send response

    res.status(200).json({
      success: true,
      message: 'Student is crate successfully',
      data: result,
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: err.message|| 'something went wrong',
      error:err,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrieved successfully',
      data: result,
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: err.message|| 'something went wrong',
      error:err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: err.message|| 'something went wrong',
      error:err,
    });
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
