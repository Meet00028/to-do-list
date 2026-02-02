import Book from '../models/book.model';
import { BaseRepository } from './base.repository';

export class BookRepository extends BaseRepository<any> {
  constructor() { super(Book); }
}
