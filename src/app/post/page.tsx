"use client";
import { Header } from "@/components/Header/Header";
import { PostCenterComponent } from "@/components/features/post/PostCenterComponent";
import { PostLeftComponent } from "@/components/features/post/PostLeftComponent";
import { useTextInput } from "@/hooks/useTextInput";
import { MultiTemplate } from "@/templates/MultiTemplate";
import { Box } from "@mui/material";

export default function Home() {
  const titleInputHooks = useTextInput();
  const handleNameInputHooks = useTextInput();
  const bodyInputHooks = useTextInput();

  const searchInputHooks = useTextInput();

  return (
    <>
      <Header />
      <MultiTemplate>
        {/*左コンテンツ*/}
        <Box className="px-2">
          <PostLeftComponent searchInputHooks={searchInputHooks} />
        </Box>
        <Box className="px-2">
          {/*中央コンテンツ*/}
          <PostCenterComponent
            titleInputHooks={titleInputHooks}
            handleNameInputHooks={handleNameInputHooks}
            bodyInputHooks={bodyInputHooks}
            searchInputHooks={searchInputHooks}
          />
        </Box>
        <Box className="bg-blue-200">M</Box>
      </MultiTemplate>
    </>
  );
}
