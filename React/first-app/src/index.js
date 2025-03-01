import React from 'react';
import ReactDOM from 'react-dom/client';

const App = function() {
  const buttonText = {text: ' Submit'};
  return(
    <div>
      <label htmlFor="name" className="label">Enter name: </label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'red', color: 'white'}}>
        { buttonText.text }
      </button>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
)