import TodoModel from "../schema/todo.schema";

export class TodoService {
  async create(title: string) {
    return TodoModel.create({ title });
  }

  async findAll() {
    return TodoModel.find();
  }

  async update(id: string, title: string) {
    return TodoModel.findByIdAndUpdate(id, { title }, { new: true });
  }

  async delete(id: string) {
    return TodoModel.findByIdAndDelete(id);
  }
}
