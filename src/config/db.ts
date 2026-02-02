import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export class Database {
  private static instance: Database;

  private constructor() {
    this.connect();
  }

  private async connect() {
    try {
      // Try local connection first with short timeout
      await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/bookstore_oop', {
        serverSelectionTimeoutMS: 2000
      });
      console.log('MongoDB connected');
    } catch (err) {
      console.log('Local MongoDB not found, starting in-memory DB...');
      try {
        const mongod = await MongoMemoryServer.create();
        const uri = mongod.getUri();
        await mongoose.connect(uri);
        console.log('In-memory MongoDB connected');
      } catch (e) {
        console.error('DB Connection failed:', e);
      }
    }
  }

  static getInstance() {
    if (!Database.instance) Database.instance = new Database();
    return Database.instance;
  }
}
