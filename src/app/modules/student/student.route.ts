import express from 'express';
import { studentController } from './student.controller';
//will call controller function
const route = express.Router();

route.post('/create-student', studentController.createStudent);
route.get('/', studentController.getAllStudent);
route.get('/:studentId', studentController.getSingleStudent);

export const StudentRoute = route;
