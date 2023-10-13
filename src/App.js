import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './colorpicker';

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'pink',
  'cyan',
  'brown',
  'gray',
  'lightblue',
  'lightgreen',
  'lightpink',
  'lightcyan',
  'lightgray',
  'darkred',
];

function App() {
  return (
    <div className="app">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
