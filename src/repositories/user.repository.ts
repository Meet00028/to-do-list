import User from '../models/user.model';
import { BaseRepository } from './base.repository';

export class UserRepository extends BaseRepository<any> {
  constructor() { super(User); }
  async findByEmail(email: string) { return this.model.findOne({ email }).select('+password'); }
}
