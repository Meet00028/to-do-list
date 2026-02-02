import { Schema, model, Document } from "mongoose";

export interface Todo extends Document {
  title: string;
}

const todoSchema = new Schema<Todo>({
  title: { type: String, required: true },
});

export default model<Todo>("Todo", todoSchema);
