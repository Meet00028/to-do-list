import mongoose, { Schema } from 'mongoose';

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Book', BookSchema);
