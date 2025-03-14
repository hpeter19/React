import { useLayoutEffect } from "react";


function List(){
//adding curly brackets to arrays making them Objects
const fruits =[{Id:1,name:"Apples", calories:105},
    {Id:2,name:"Mangoes", calories:45},
    {Id:3,name:"Strawberry",calories:88},
    {Id:4,name:"Cherry", calories:33}]
// sorting the array. Does not work with numbers
//fruit object should be enclosed with curly brackets
//sorting array.a rep 1st item while b rep 2nd item
//fruits.sort((a,b) => a.name.localeCompare(b.name));//Alphabetical Order
//fruits.sort((a,b) => b.name.localeCompare(a.name));//reverse order
//fruits.sort((a,b) => a.calories-b.calories);//numerical order
fruits.sort((a,b) => b.calories-a.calories);//reversed numerical order
//low calory fruits
//const LowCalFruits = fruits.filter(fruit => fruit.calories <100);//low calory fruits
const HighCalFruits = fruits.filter(fruit => fruit.calories >=100);//High calories fruits

//fruit.name object is used when each list has different name.
//for the case of a database, we set the key as id.


const listItems=HighCalFruits.map(HighCalFruit => <li key ={HighCalFruit.Id}>
                     {HighCalFruit.name}:&nbsp;
                     <b>{HighCalFruit.calories};</b>
                     </li>);
return(<ol>{listItems}</ol>);
}

export default List