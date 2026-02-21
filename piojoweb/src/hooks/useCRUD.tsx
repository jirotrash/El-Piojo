import { useState } from "react";

interface Task {
  id:   number;
  name: string;
}

interface UseCRUD {
  tasks:      Task[];
  createTask: (name: string) => void;
  readTasks:  () => Task[];
  updateTask: (id: number, name: string) => void;
  deleteTask: (id: number) => void;
}

export const useCRUD = (): UseCRUD => {

  const [ tasks, setTasks ] = useState<Task[]>([]);

  const createTask = (name: string) => {
    const newTask: Task = {
      id: Date.now(),
      name: name
    };
    setTasks(prev => [ ...prev, newTask ]);
  };

  const readTasks = () => tasks;

  const updateTask = (id: number, name: string) => {
    setTasks(prev => prev.map(task => 
      (task.id === id) ? { ...task, name: name } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return {
    tasks,
    createTask,
    readTasks,
    updateTask,
    deleteTask
  };
};