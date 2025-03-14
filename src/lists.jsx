import { useLayoutEffect } from "react";


function List(){
//adding curly brackets to arrays making them Objects
const fruits =[{name:"Apples", calories:95},
    {name:"Mangoes", calories:45},
    {name:"Strawberry",calories:88},
    {name:"Cherry", calories:33}]
// sorting the array. Does not work with numbers
//fruit object should be enclosed with curly brackets
fruits.sort();
const listItems= fruits.map(fruit => <li key ={fruit.name}>{fruit.name}</li>);
return(<ul>{listItems}</ul>);
}

export default List