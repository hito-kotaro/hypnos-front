"use client";
import { CommentCard } from "@/components/CommentCard/CommentCard";
import { Header } from "@/components/Header/Header";
import { ItemCard } from "@/components/ItemCard/ItemCard";
import { CenterComponent } from "@/components/features/articles/CenterComponent";
import { rakutenItemsMock } from "@/mock/rakutenItemMock";
import { MultiTemplate } from "@/templates/MultiTemplate";
import { RakutenItemBase } from "@/types/rakutenItem";
import { Box, Link } from "@mui/material";

export default function Page() {
  return (
    <>
      <Header isPostEnable />
      <MultiTemplate>
        <Box className="h-screen overflow-y-screen px-2">
          <Box sx={{ height: "55px" }} />
          <Box>
            <CommentCard />
          </Box>
        </Box>

        <Box className="h-screen overflow-y-screen px-2">
          <Box sx={{ height: "55px" }} />
          <CenterComponent />
        </Box>
        <Box className="h-screen overflow-y-screen px-2">
          <Box sx={{ height: "55px" }} />
          <Box>
            {rakutenItemsMock.map((r: RakutenItemBase, index: number) => {
              return (
                <Link key={index} href={r.Item.affiliateUrl}>
                </Link>
              );
            })}
          </Box>
        </Box>
      </MultiTemplate>
    </>
  );
}
