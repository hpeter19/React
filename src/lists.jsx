import { useLayoutEffect } from "react";


function List(){

const fruits =["Apples","Mangoes","Strawberry","Cherry"]
// sorting the array. Does not work with numbers
//fruit object should be enclosed with curly brackets
fruits.sort();
const listItems= fruits.map(fruit => <li>{fruit}</li>);
return(<ul>{listItems}</ul>);
}

export default List