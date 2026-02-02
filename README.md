# Book Store Backend

A clean, OOP-based backend for a Book Store using Node.js, Express, and TypeScript.

## Features
- **CRUD Operations**: Complete management for Books.
- **Authentication**: Secure JWT-based Register & Login.
- **Advanced Features**: Search, Filter, Sort, and Pagination.
- **Architecture**: Layered pattern (Controller → Service → Repository).

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/bookstore
   JWT_SECRET=your_secret_key
   ```

3. **Run Server**
   ```bash
   npm run dev
   ```

## API Endpoints

### Auth
- `POST /api/v1/auth/register` - Register user
- `POST /api/v1/auth/login` - Login user

### Books
- `GET /api/v1/books` - List all books (supports `?sort=-price&page=1`)
- `POST /api/v1/books` - Create book (Auth required)
- `GET /api/v1/books/:id` - Get book details
- `PATCH /api/v1/books/:id` - Update book (Auth required)
- `DELETE /api/v1/books/:id` - Delete book (Auth required)
