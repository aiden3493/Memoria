import { $getRoot, $getSelection, type EditorState } from "lexical";
import { useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

const TextEditor: React.FC = () => {
  const CustomAutoFocusPlugin = () => {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
      editor.focus();
    }, [editor]);

    return null;
  };

  const onChange = (editorState: EditorState) => {
    editorState.read(() => {
      const root = $getRoot();
      const selection = $getSelection();

      console.log(root, selection);
    });
  };

  const onError = (error: Error) => {
    console.log(error);
  };

  const editorConfig = {
    namespace: "planEditor",
    onError,
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <PlainTextPlugin
        contentEditable={
          <ContentEditable className="h-full max-h-full w-full text-[16px] outline-none" />
        }
        placeholder={null}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <OnChangePlugin onChange={onChange} />
      <HistoryPlugin />
      <CustomAutoFocusPlugin />
    </LexicalComposer>
  );
};

export default TextEditor;
