import { useLayoutEffect } from "react";


function List(props){


const category = props.category;
const itemList=props.items;

const listItems=itemList.map(item => <li key ={item.Id}>
                     {item.name}:&nbsp;
                     <b>{item.calories};</b>
                     </li>);
return(
  <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
  </>

);
}
//default properties if category is empty
List.defaultProps={
    category: "category",
    items:[],
}
export default List