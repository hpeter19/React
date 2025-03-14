import React from 'react';
import Card from './Card'; 
import Button from './button';// Import the Card component
import Student from './students'; 
import List from './lists';

function App() {
  return (
    <div >
      <Card />
      <Card />
      <Card />
      <Card /> {/* Render the Card component */}
      <List />
      <Button />
      <Student name="Billy" age={30} isStudent={true}/>
      <Student name="Caith" age={50} isStudent={false}/>
      <Student name="Brandon" age={20} isStudent={true}/>
      <Student name="Larry"/>
    </div>
  );
}

export default App;
