import { Model } from 'mongoose';
import { APIFeatures } from '../utils/apiFeatures';

export class BaseRepository<T> {
  constructor(protected model: Model<T>) {}

  async create(data: any) { return this.model.create(data); }
  
  async findAll(query: any) {
    return new APIFeatures(this.model.find(), query).filter().sort().limitFields().paginate().query;
  }
  
  async findById(id: string) { return this.model.findById(id); }
  async findOne(query: any) { return this.model.findOne(query); }
  async update(id: string, data: any) { return this.model.findByIdAndUpdate(id, data, { new: true }); }
  async delete(id: string) { return this.model.findByIdAndDelete(id); }
}
