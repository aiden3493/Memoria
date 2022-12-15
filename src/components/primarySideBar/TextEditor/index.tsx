import { $getRoot, type EditorState } from "lexical";
import { useContext } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { globalContext } from "../../../pages/_app";
import { toSchedule } from "../../../lib/toSchedule";
import AutoFocusPlugin from "./plugins/AutoFocusPlugin";

const TextEditor: React.FC = () => {
  const { schedules, setSchedules } = useContext(globalContext);

  const onChange = (editorState: EditorState) => {
    editorState.read(() => {
      const root = $getRoot();

      const textData = root.__cachedText ?? "";

      if (setSchedules) {
        const schedule = toSchedule(textData);
        console.log(schedule);
        setSchedules(schedule);
      }
    });
  };

  const onError = (error: Error) => {
    console.log(error);
  };

  const editorConfig = {
    namespace: "Editor",
    onError,
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="h-full max-h-full w-full text-[17px] outline-none" />
        }
        placeholder={null}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <CheckListPlugin />
      <OnChangePlugin onChange={onChange} />
      <HistoryPlugin />
      <AutoFocusPlugin />
    </LexicalComposer>
  );
};

export default TextEditor;
