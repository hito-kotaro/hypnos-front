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

  const handleSearch = async (keyword: string) => {
    const url = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&keyword=${keyword}&affiliateId=352bd4f5.1c6fc0ac.352bd4f6.8adb50fc&applicationId=1047556559373479761`;
    const result = await fetch(url).then((r) => r.json());
    // TODO ここをuseItemListの処理で作る
    itemListHooks.setItemList(result.Items);
  };

  return (
    <>
      <Header />
      <MultiTemplate>
        {/*左コンテンツ*/}
        <Box className="h-screen overflow-y-scroll px-2">
          <Box sx={{ height: "55px" }} />
          <PostLeftComponent
            searchInputHooks={searchInputHooks}
            handleSearch={handleSearch}
            rakutenItems={itemListHooks.itemList}
            addItem={itemListHooks.itemAction}
          />
        </Box>
        <Box className=" px-2">
          {/*中央コンテンツ*/}
          <Box sx={{ height: "55px" }} />
          <PostCenterComponent
            titleInputHooks={titleInputHooks}
            handleNameInputHooks={handleNameInputHooks}
            bodyInputHooks={bodyInputHooks}
            searchInputHooks={searchInputHooks}
            itemAction={itemListHooks.itemAction}
            handleSearch={handleSearch}
            rakutenItemList={itemListHooks.itemList}
            selectedItemList={itemListHooks.selectedItemList}
          />
        </Box>
        {/*右コンテンツ*/}
        <Box className="h-screen overflow-y-scroll px-2">
          <Box sx={{ height: "55px" }} />
          <PostRightComponent
            items={itemListHooks.selectedItemList}
            removeItem={itemListHooks.itemAction}
          />
        </Box>
      </MultiTemplate>
    </>
  );
}
