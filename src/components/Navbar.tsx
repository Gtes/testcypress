import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a className="brand-logo" href="/">
        React + Typescript
      </a>
      <ul className="right hide-on-med-and-down" id="nav-mobile">
        <li>
          <NavLink to="/">Todo</NavLink>
        </li>
        <li>
          <NavLink to="/about">Information</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
