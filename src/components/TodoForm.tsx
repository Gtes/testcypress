import React, { useRef } from 'react';

type TodoFormProps = {
  onAdd(title: string): void;
};

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  //   const [title, setTitle] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
      //   console.log(title);
      //   setTitle('')
    }
  };

  

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        id="title"
        placeholder="Input Todo"
        // value={title}
        // onChange={changeHandler}
        type="text"
        onKeyPress={keyPressHandler}
      />
      <label className="active" htmlFor="title">
        Add Todo
      </label>
    </div>
  );
};
