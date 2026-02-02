import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true });

UserSchema.pre('save', async function() {
  if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 12);
});

UserSchema.methods.comparePassword = async function(candidate: string) {
  return bcrypt.compare(candidate, this.password);
};

export default mongoose.model('User', UserSchema);
