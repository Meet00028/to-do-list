import { BookService } from '../services/book.service';
import { catchAsync } from '../utils/catchAsync';

const service = new BookService();

export class BookController {
  getAllBooks = catchAsync(async (req: any, res: any) => {
    const books = await service.getAll(req.query);
    res.status(200).json({ status: 'success', results: books.length, data: { books } });
  });

  getBook = catchAsync(async (req: any, res: any) => {
    const book = await service.getById(req.params.id);
    res.status(200).json({ status: 'success', data: { book } });
  });

  createBook = catchAsync(async (req: any, res: any) => {
    const book = await service.create(req.body);
    res.status(201).json({ status: 'success', data: { book } });
  });

  updateBook = catchAsync(async (req: any, res: any) => {
    const book = await service.update(req.params.id, req.body);
    res.status(200).json({ status: 'success', data: { book } });
  });

  deleteBook = catchAsync(async (req: any, res: any) => {
    await service.delete(req.params.id);
    res.status(204).json({ status: 'success', data: null });
  });
}
