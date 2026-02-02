import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/auth.routes';
import bookRoutes from './routes/book.routes';
import todoRoutes from './routes/todo.routes';
import { globalErrorHandler } from './middleware/error.middleware';
import { AppError } from './utils/appError';

const app = express();

app.use((req, res, next) => {
  console.log(`[DEBUG] Request: ${req.method} ${req.url}`);
  next();
});

app.use(cors(), helmet(), express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/todos', todoRoutes);


app.use((req, _, next) => next(new AppError(`Can't find ${req.originalUrl}`, 404)));

app.use(globalErrorHandler);

export default app;
