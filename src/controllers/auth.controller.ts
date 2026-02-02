import { AuthService } from '../services/auth.service';
import { catchAsync } from '../utils/catchAsync';

const authService = new AuthService();

export class AuthController {
  register = catchAsync(async (req: any, res: any) => {
    const data = await authService.register(req.body);
    res.status(201).json({ status: 'success', ...data });
  });

  login = catchAsync(async (req: any, res: any) => {
    const data = await authService.login(req.body);
    res.status(200).json({ status: 'success', ...data });
  });
}
