import React, { useState, useEffect } from 'react';

import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';
declare const confirm: (question: string) => boolean;

const staticData = [
  {
    id: 1,
    title: 'ha Johansson',
    completed: true,
  },
  {
    id: 2,
    title: 'sdf sdf',
    completed: true,
  },
  {
    id: 3,
    title: 'cvb bvccb',
    completed: false,
  },
  {
    id: 4,
    title: 'asd asd',
    completed: false,
  },
];

export const TodosPage: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>(staticData);

  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

  //   setTodos(saved);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos])
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    const index = todos.find((todo) => todo.id === id);
    index!.completed = !index!.completed;

    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Confirm delete');

    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler} />
    </React.Fragment>
  );
};
