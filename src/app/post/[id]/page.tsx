"use client";
import { Header } from "@/components/Header/Header";
import { CenterComponent } from "@/components/features/articles/CenterComponent";
import { LeftComponent } from "@/components/features/articles/LeftComponent";
import { RightComponent } from "@/components/features/articles/RightComponent";
import { articlesMock } from "@/mock/articleMock";
import { rakutenItemsMock } from "@/mock/rakutenItemMock";
import { MultiTemplate } from "@/templates/MultiTemplate";
import { Box, Link } from "@mui/material";

export default function Page() {
  return (
    <>
      <Header isPostEnable />
      {/*左コンポーネント*/}
      <MultiTemplate>
        <Box className="h-screen overflow-y-scroll px-2">
          <Box sx={{ height: "55px" }} />
					<LeftComponent comments={articlesMock.comments}/>
        </Box>

        {/*中央コンポーネント*/}
        <Box className="h-screen overflow-y-scroll px-2">
          <Box sx={{ height: "55px" }} />
          <CenterComponent />
        </Box>
        {/*右コンポーネント*/}
        <Box className="h-screen overflow-y-scroll px-2">
          <Box sx={{ height: "55px" }} />
					<RightComponent items={rakutenItemsMock}/>
        </Box>
      </MultiTemplate>
    </>
  );
}
