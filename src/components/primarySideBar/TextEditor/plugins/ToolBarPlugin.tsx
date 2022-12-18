import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import PlusTodoIcon from "../icons/PlusTodoIcon";
import addTodo from "../../../../lib/addTodo";

const ToolBarPlugin: React.FC = () => {
  const [editor] = useLexicalComposerContext();

  const onAddTodoClick = () => {
    editor.update(() => {
      addTodo();
    });
  };

  return (
    <div className=" flex h-[50px] min-w-full items-center justify-end border-b-[3px] border-black px-3">
      <div
        title="일정 추가"
        onClick={onAddTodoClick}
        className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-200 p-1 transition-all hover:bg-gray-300"
      >
        <PlusTodoIcon />
      </div>
    </div>
  );
};

export default ToolBarPlugin;
