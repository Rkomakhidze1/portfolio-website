import React from 'react';
import Home from './pages/Home';

window.onunload = function () {
  window.scrollTo(0, 0);
};

function App() {
  return <Home />;
}

export default App;
