import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {

  if(await Student.isUserExists(studentData.id)){
    throw new Error('User already exist');
   }

   const result = await Student.create(studentData);//build in static method



  // const student = new Student(studentData); // create an  instance

  // if(await student.isUserExist(studentData.id)){
  //   throw new Error('User already exist');
  // }

  // const result = await student.save(); //build in instance method

  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
