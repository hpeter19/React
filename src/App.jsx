import React from 'react';
import Card from './Card'; 
import Button from './button';// Import the Card component
import Student from './students'; 
import List from './lists';
import MyComponent from './myComponent';
import Counter from './counter';
import ColorPicker from './colorPicker';
import MyComponento from './myComponento';
import ToDoList from './toDoList';
import Mycompnent from './myCompnent';
import DigitalClock from './digitalClock';
import ComponentA from '../componentA';
import Remponent from './romponents';



function App() {
  const fruits =[{Id:1,name:"Apples", calories:105},
    {Id:2,name:"Mangoes", calories:45},
    {Id:3,name:"Strawberry",calories:88},
    {Id:4,name:"Cherry", calories:33}]

  const vegetables =[{Id:5,name:"waru", calories:10},
    {Id:6,name:"Spinash", calories:115},
    {Id:7,name:"Sukuma",calories:48},
    {Id:8,name:"Dania", calories:93}]
  

  return (
    <div >
      <Remponent />
      <ComponentA />
      <DigitalClock />
      <ToDoList />
      <Mycompnent />
      <MyComponento />
      <ColorPicker />
      <MyComponent />
      <Counter />
      <Card />
      <Card />
      <Card />
      <Card /> {/* Render the Card component */}
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
      <Button />
      <Student name="Billy" age={30} isStudent={true}/>
      <Student name="Caith" age={50} isStudent={false}/>
      <Student name="Brandon" age={20} isStudent={true}/>
      <Student name="Larry"/>
    </div>
  );
}

export default App;
