import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};
//application route ex:- /api/v1/students/pore je route a user hit korbe
app.use('/api/v1/students', StudentRoute);

app.get('/', getAController);

export default app;
console.log(process.cwd());
//C:\L2Project\firstProject
