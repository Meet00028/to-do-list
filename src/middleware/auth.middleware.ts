import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../utils/appError';
import User from '../models/user.model';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new AppError('Not logged in', 401);
    
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await User.findById(decoded.id);
    if (!user) throw new AppError('User not found', 401);
    
    (req as any).user = user;
    next();
  } catch (err) { next(new AppError('Unauthorized', 401)); }
};
