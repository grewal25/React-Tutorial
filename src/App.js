import './App.css';

import React from 'react';
import Welcome from './components/welcome';

const comment = {
  date : new Date(),
  text: 'hey there',
  author: {
      name:'kity',
      
  }
}

function App() {
  return (
    <div className="App">
      <Welcome name = {comment.author.name}
      
      />
    </div>
  );
}

export default App;
