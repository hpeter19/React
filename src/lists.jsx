import { useLayoutEffect } from "react";


function List(){
//adding curly brackets to arrays making them Objects
const fruits =[{name:"Apples", calories:95},
    {Id:1,name:"Mangoes", calories:45},
    {Id:2,name:"Strawberry",calories:88},
    {Id:3,name:"Cherry", calories:33}]
// sorting the array. Does not work with numbers
//fruit object should be enclosed with curly brackets
fruits.sort();
//fruit.name object is used when each list has different name.
//for the case of a database, we set the key as id.
const listItems= fruits.map(fruit => <li key ={fruit.Id}>{fruit.name}</li>);
return(<ul>{listItems}</ul>);
}

export default List