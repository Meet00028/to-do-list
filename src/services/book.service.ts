import { BookRepository } from '../repositories/book.repository';
import { AppError } from '../utils/appError';

export class BookService {
  private repo = new BookRepository();

  async getAll(query: any) { return this.repo.findAll(query); }

  async getById(id: string) {
    const book = await this.repo.findById(id);
    if (!book) throw new AppError('Book not found', 404);
    return book;
  }

  async create(data: any) { return this.repo.create(data); }

  async update(id: string, data: any) {
    const book = await this.repo.update(id, data);
    if (!book) throw new AppError('Book not found', 404);
    return book;
  }

  async delete(id: string) {
    if (!await this.repo.delete(id)) throw new AppError('Book not found', 404);
  }
}
