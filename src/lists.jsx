import { useLayoutEffect } from "react";


function List(){

const fruits =["Apples","Mangoes","Strawberry","Cherry"]
const listItems= fruits.map(fruit => <li>fruit</li>);
return(<ul>{listItems}</ul>);
}

export default List