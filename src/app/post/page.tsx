"use client";
import { Header } from "@/components/Header/Header";
import { PostCenterComponent } from "@/components/features/post/PostCenterComponent";
import { PostLeftComponent } from "@/components/features/post/PostLeftComponent";
import { PostRightComponent } from "@/components/features/post/PostRightComponent";
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
        <Box className="h-screen overflow-y-scroll px-2">
					<Box sx={{height:'55px'}}/>
          <PostLeftComponent searchInputHooks={searchInputHooks} />
        </Box>
        <Box className=" px-2">
          {/*中央コンテンツ*/}
					<Box sx={{height:'55px'}}/>
          <PostCenterComponent
            titleInputHooks={titleInputHooks}
            handleNameInputHooks={handleNameInputHooks}
            bodyInputHooks={bodyInputHooks}
            searchInputHooks={searchInputHooks}
          />
        </Box>
        {/*右コンテンツ*/}
        <Box className="h-screen overflow-y-scroll px-2">
					<Box sx={{height:'55px'}}/>
					<PostRightComponent/>
        </Box>
      </MultiTemplate>
    </>
  );
}
