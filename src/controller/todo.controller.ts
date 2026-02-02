import { Request, Response } from 'express';
import { TodoService } from '../service/todo.service';
import { catchAsync } from '../utils/catchAsync';

const service = new TodoService();

export class TodoController {
  create = catchAsync(async (req: Request, res: Response) => {
    const { title } = req.body as { title?: string };
    if (!title || typeof title !== 'string') return res.status(400).json({ message: 'title required' });
    res.status(201).json(await service.create(title));
  });

  findAll = catchAsync(async (req: Request, res: Response) => {
    res.json(await service.findAll());
  });

  update = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params as { id?: string };
    const { title } = req.body as { title?: string };
    if (!id) return res.status(400).json({ message: 'id required' });
    if (!title || typeof title !== 'string') return res.status(400).json({ message: 'title required' });
    const updated = await service.update(String(id), title);
    if (!updated) return res.status(404).json({ message: 'not found' });
    res.json(updated);
  });

  delete = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params as { id?: string };
    if (!id) return res.status(400).json({ message: 'id required' });
    const deleted = await service.delete(String(id));
    if (!deleted) return res.status(404).json({ message: 'not found' });
    res.status(204).send();
  });
}
