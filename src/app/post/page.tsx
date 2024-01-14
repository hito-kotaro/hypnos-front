"use client";
import { FlexTextField } from "@/components/FlexTextField/FlexTextField";
import { Header } from "@/components/Header/Header";
import { ItemCard } from "@/components/ItemCard/ItemCard";
import { SearchField } from "@/components/SearchField/SearchField";
import { PostCenterComponent } from "@/components/features/post/PostCenterConponent";
import { useTextInput } from "@/hooks/useTextInput";
import { rakutenItemsMock } from "@/mock/rakutenItemMock";
import { MultiTemplate } from "@/templates/MultiTemplate";
import { RakutenItemBase } from "@/types/rakutenItem";
import { Box, Button, Link, TextField } from "@mui/material";

export default function Home() {
  const titleInputHooks = useTextInput();
  const handleNameInputHooks = useTextInput();
  const bodyInputHooks = useTextInput();

  const searchInputHooks = useTextInput();

  return (
    <>
      <Header />
      <MultiTemplate>
        <Box className="bg-red-200">L</Box>
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
