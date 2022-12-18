import { $createListItemNode, $createListNode } from "@lexical/list";
import { $createTextNode, $getRoot } from "lexical";

const addTodo = () => {
  const root = $getRoot();

  const todos = $createListNode("check").append(
    $createListItemNode().append($createTextNode())
  );

  root.append(todos);
};

export default addTodo;
