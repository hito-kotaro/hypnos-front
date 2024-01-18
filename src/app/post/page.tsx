"use client";
import { Header } from "@/components/Header/Header";
import { PostCenterComponent } from "@/components/features/post/PostCenterComponent";
import { PostLeftComponent } from "@/components/features/post/PostLeftComponent";
import { PostRightComponent } from "@/components/features/post/PostRightComponent";
import { useItemList } from "@/hooks/useItemList";
import { useTextInput } from "@/hooks/useTextInput";
import { MultiTemplate } from "@/templates/MultiTemplate";
import { Box } from "@mui/material";

export default function Home() {
  const titleInputHooks = useTextInput();
  const handleNameInputHooks = useTextInput();
  const bodyInputHooks = useTextInput();
  const searchInputHooks = useTextInput();

  const itemListHooks = useItemList();

  return (
    <>
      <Header />
      <MultiTemplate>
        {/*左コンテンツ*/}
        <Box className="px-2">
          <PostLeftComponent
            searchInputHooks={searchInputHooks}
            handleSearch={itemListHooks.handleSearch}
            rakutenItems={itemListHooks.itemList}
            addItem={itemListHooks.itemAction}
          />
        </Box>
        <Box className=" px-2">
          {/*中央コンテンツ*/}
          <PostCenterComponent
            rakutenItemList={itemListHooks.itemList}
            selectedItemList={itemListHooks.selectedItemList}
            titleInputHooks={titleInputHooks}
            handleNameInputHooks={handleNameInputHooks}
            bodyInputHooks={bodyInputHooks}
            searchInputHooks={searchInputHooks}
            itemAction={itemListHooks.itemAction}
            handleSearch={itemListHooks.handleSearch}
          />
        </Box>
        {/*右コンテンツ*/}
        <Box className="px-2">
          <PostRightComponent
            items={itemListHooks.selectedItemList}
            removeItem={itemListHooks.itemAction}
          />
        </Box>
      </MultiTemplate>
    </>
  );
}
