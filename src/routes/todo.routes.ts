import { Router } from 'express';
import { TodoController } from '../controllers/todo.controller';

const router = Router();
const controller = new TodoController();



router.route('/').get(controller.findAll).post(controller.create);
router.route('/:id').patch(controller.update).delete(controller.delete);

export default router;
