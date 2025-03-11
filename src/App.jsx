import React from 'react';
import Card from './Card'; 
import Button from './button';// Import the Card component

function App() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
      <Card /> {/* Render the Card component */}
      <Button />
    </div>
  );
}

export default App;
