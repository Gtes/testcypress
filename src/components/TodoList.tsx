import React from 'react';

import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export const TodoList: React.FunctionComponent<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return <p className="center">Not todos</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();

    onRemove(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ['todo'];

        if (todo.completed) {
          classes.push('completed');
        }

        return (
          <li key={todo.id} className={classes.join(' ')}>
            <label>
              <input
                checked={todo.completed}
                type="checkbox"
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
