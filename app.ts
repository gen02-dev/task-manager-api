import * as express from "express";
import mongoose from 'mongoose';
import taskRoutes from './routes/taskRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(taskRoutes);

mongoose.connect('mongodb://localhost/tasks')
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch(err => console.error('Error connecting to MongoDB', err));
