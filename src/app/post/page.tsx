"use client";
import { FlexTextField } from "@/components/FlexTextField/FlexTextField";
import { Header } from "@/components/Header/Header";
import { ItemCard } from "@/components/ItemCard/ItemCard";
import { SearchField } from "@/components/SearchField/SearchField";
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
          <Box className="flex justify-between items-center my-2">
            {/*コンテンツヘッダ*/}
            <Link href="/" underline="none" className="text-gray-800">
              投稿をやめる
            </Link>
            <Button variant="contained" color="secondary">
              投稿する
            </Button>
          </Box>
          {/*画像アップロード*/}
          <Box
            className="bg-white flex justify-center items-center rounded-lg"
            sx={{ height: "200px" }}
          >
            <Button variant="contained" color="secondary">
              画像をアップロード
            </Button>
          </Box>

          {/*文字入力*/}
          <Box>
            <Box>
              <FlexTextField
                size="large"
                placeholder="タイトルを入力"
                inputHooks={titleInputHooks}
              />
            </Box>
            <Box>
              <FlexTextField
                size="medium"
                placeholder="ハンドルネームを入力"
                inputHooks={handleNameInputHooks}
              />
            </Box>
            <Box>
              <TextField
                variant="outlined"
                multiline
                fullWidth
                rows={10}
                placeholder="本文を入力"
                value={bodyInputHooks.value}
                onChange={bodyInputHooks.handleChange}
              />
            </Box>
          </Box>
          {/*アイテム検索*/}
          <Box className='mt-6'>
						<Box className='flex flex-col justify-center'>
            <SearchField inputHooks={searchInputHooks} />
            <Button variant="contained" color="secondary" className='mt-3'>
              楽天市場でアイテムを探す
            </Button>
						</Box>
          </Box>
          {/*検索結果表示エリア*/}
          <Box>
            {rakutenItemsMock.map((r: RakutenItemBase, i: number) => {
              const item = r.Item;
              return (
                <Box key={i} className="flex justify-center mt-3">
                  <ItemCard
                    imageUrl={item.mediumImageUrls[0].imageUrl}
                    name={item.itemName}
                    price={item.itemPrice}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box className="bg-blue-200">M</Box>
      </MultiTemplate>
    </>
  );
}
