import express, { Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/routes/user.route';

const app = express();

//parse
app.use(express.json());
app.use(cors());

//all routes
app.use('/api/v1/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
