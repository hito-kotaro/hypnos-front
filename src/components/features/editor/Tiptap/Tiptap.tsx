import { Box } from "@mui/material";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "本文を入力",
    editorProps: {
      attributes: {
        class: "h-10 bg-blue-200",
      },
    },
  });

  if (!editor) return null;

  return (
    <Box>
      <EditorContent editor={editor} className="p-0 h-10 bg-red-200" />
    </Box>
  );
};
