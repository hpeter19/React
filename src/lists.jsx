import { useLayoutEffect } from "react"; // Unused import, but kept as per your request
import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map(item => (
    <li key={item.Id}>
      {item.name}:&nbsp;
      <b>{item.calories}</b> {/* Removed unnecessary semicolon */}
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
List.PropTypes={
    category: PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({   id:PropTypes.number,
                                              name:PropTypes.string,
                                              calories:PropTypes.number}))
}
// Default properties if category or items are empty
List.defaultProps = {
  category: "category",
  items: [],
};

export default List;