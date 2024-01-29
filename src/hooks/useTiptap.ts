import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const useTiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "本文を入力",
      }),
    ],
    editorProps: {
      attributes: {
        class: "text-text outline-none",
      },
    },
  });


  return { editor  };
};
