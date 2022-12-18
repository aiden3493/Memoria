import { type EditorState } from "lexical";
import { $getRoot } from "lexical";
import { useContext } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { globalContext } from "../../../pages/_app";
import { toSchedule } from "../../../lib/toSchedule";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import AutoFocusPlugin from "./plugins/AutoFocusPlugin";
import EditorNodes from "./nodes/EditorNodes";
import EditorTheme from "./theme/EditorTheme";
import ToolBarPlugin from "./plugins/ToolBarPlugin";
import addTodo from "../../../lib/addTodo";

function prepopulatedRichText() {
  addTodo();
}

const TextEditor: React.FC = () => {
  const { setSchedules } = useContext(globalContext);

  const onChange = (editorState: EditorState) => {
    editorState.read(() => {
      const root = $getRoot();

      const cachedText = root.__cachedText ?? "";

      if (setSchedules) {
        const schedule = toSchedule(cachedText);
        setSchedules(schedule);
      }
    });
  };

  const onError = (error: Error) => {
    console.log(error);
  };

  const editorConfig = {
    editorState: prepopulatedRichText,
    namespace: "Editor",
    onError,
    nodes: [...EditorNodes],
    theme: EditorTheme,
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <ToolBarPlugin />
      <div className="h-full w-full p-5 pt-0 pr-3">
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="h-full w-full overflow-y-scroll text-[18px] leading-7 outline-none" />
          }
          placeholder={null}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <ListPlugin />
        <CheckListPlugin />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </div>
    </LexicalComposer>
  );
};

export default TextEditor;
