import './App.scss';

import React, { ReactElement } from 'react';

function App(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dumbest React + Typescript boilerplate ever</h1>
        <h2>{'What is included:'}</h2>
        <ul>
          <li>{'@typescript-eslint/eslint-plugin": "^4.6.0"'}</li>
          <li>{'@typescript-eslint/parser": "^4.6.0"'}</li>
          <li>{'eslint": "^7.12.1"'}</li>
          <li>{'eslint-config-prettier": "^6.15.0"'}</li>
          <li>{'eslint-plugin-prettier": "^3.1.4"'}</li>
          <li>{'eslint-plugin-react": "^7.21.2"'}</li>
          <li>{'eslint-plugin-react-hooks": "^4.1.2"'}</li>
          <li>{'eslint-plugin-simple-import-sort": "^5.0.3"'}</li>
          <li>{'node-sass": "^4.14.1"'}</li>
          <li>{'prettier": "^2.1.2"'}</li>
          <li>{'sass-loader": "^10.0.2"'}</li>
          <br />
          <li>random prettier config</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
