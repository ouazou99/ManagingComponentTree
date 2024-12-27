import React, { useState } from "react";

function TodoItem(props) {
  const [item, setItem] = useState(false);

  function onChecked() {}

  return <li onClick={() => props.onChecked(props.id)}>{props.todoItem}</li>;
}
export default TodoItem;
