import mongoose, { Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  completed: boolean;
  status: 'todo' | 'in-progress' | 'blocked' | 'done';
  comments: string;
}

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ['todo', 'in-progress', 'blocked', 'done'],
    default: 'todo',
  },
  comments: { type: String, default: '' },
});

export default mongoose.model<ITask>('Task', taskSchema);
