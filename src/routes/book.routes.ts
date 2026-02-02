import { Router } from 'express';
import { body } from 'express-validator';
import { BookController } from '../controllers/book.controller';
import { protect } from '../middleware/auth.middleware';
import { validateRequest } from '../middleware/validate.middleware';

const router = Router();
const bookController = new BookController();

router.route('/')
  .get(bookController.getAllBooks)
  .post(
    protect,
    [
      body('title').notEmpty().withMessage('Title is required'),
      body('author').notEmpty().withMessage('Author is required'),
      body('isbn').notEmpty().withMessage('ISBN is required'),
      body('price').isNumeric().withMessage('Price must be a number'),
      body('category').notEmpty().withMessage('Category is required'),
    ],
    validateRequest,
    bookController.createBook
  );

router.route('/:id')
  .get(bookController.getBook)
  .patch(protect, bookController.updateBook)
  .delete(protect, bookController.deleteBook);

export default router;
