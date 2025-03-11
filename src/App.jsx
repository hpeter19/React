import React from 'react';
import Card from './Card'; 
import Button from './button';// Import the Card component
import Student from './students'; 

function App() {
  return (
    <div >
      <Card />
      <Card />
      <Card />
      <Card /> {/* Render the Card component */}
      <Button />
      <Student name="Billy" age={30} isStudent={true}/>
      <Student name="Caith" age={50} isStudent={false}/>
      <Student name="Brandon" age={20} isStudent={true}/>
    </div>
  );
}

export default App;
