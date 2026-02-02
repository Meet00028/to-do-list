import 'dotenv/config';
import app from './app';
import { Database } from './config/db';

Database.getInstance();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
