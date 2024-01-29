import { Box } from "@mui/material";
import { EditorContent} from "@tiptap/react";
import { FC } from "react";

interface Props {
	editorHooks: any	
}

export const Tiptap:FC<Props> = (props) => {
	const {editorHooks} = props

  if (!editorHooks.editor) return null;

  return (
    <Box>
    </Box>
  );
};
