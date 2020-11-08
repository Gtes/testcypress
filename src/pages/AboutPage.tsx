import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FunctionComponent = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <h1>Hello About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia debitis vero eligendi sint
        tempora architecto unde, qui, excepturi repudiandae quo dolorem, saepe laborum odit enim
        aperiam nostrum? Voluptatem, nobis voluptate!
      </p>

      <button className="btn" onClick={() => history.push('/')}>
        Back to Todos
      </button>
    </React.Fragment>
  );
};
