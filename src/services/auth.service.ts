import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.repository';
import { AppError } from '../utils/appError';

export class AuthService {
  private repo = new UserRepository();

  private signToken(id: string) {
    return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: (process.env.JWT_EXPIRES_IN || '1d') as any });
  }

  async register(data: any) {
    const user = await this.repo.create(data);
    return { user, token: this.signToken(user._id) };
  }

  async login({ email, password }: any) {
    if (!email || !password) throw new AppError('Missing email or password', 400);
    const user = await this.repo.findByEmail(email);
    if (!user || !(await (user as any).comparePassword(password))) throw new AppError('Incorrect credentials', 401);
    return { user, token: this.signToken(user._id) };
  }
}
