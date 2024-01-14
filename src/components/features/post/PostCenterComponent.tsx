import { FlexTextField } from "@/components/FlexTextField/FlexTextField";
import { ItemCard } from "@/components/ItemCard/ItemCard";
import { SearchField } from "@/components/SearchField/SearchField";
import { TextInputHooks } from "@/hooks/useTextInput";
import { rakutenItemsMock } from "@/mock/rakutenItemMock";
import { RakutenItemBase } from "@/types/rakutenItem";
import { Box, Button, Link, TextField } from "@mui/material";
import { FC } from "react";

interface Props {
  titleInputHooks: TextInputHooks;
  handleNameInputHooks: TextInputHooks;
  bodyInputHooks: TextInputHooks;
  searchInputHooks: TextInputHooks;
}

export const PostCenterComponent: FC<Props> = (props) => {
  const {
    titleInputHooks,
    handleNameInputHooks,
    bodyInputHooks,
    searchInputHooks,
  } = props;

  return (
    <>
      <Box className="flex justify-between items-center">
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
      <Box className="mt-6">
        <Box className="mt-3">
          <FlexTextField
            size="large"
            placeholder="タイトルを入力"
            inputHooks={titleInputHooks}
          />
        </Box>
        <Box className="mt-3">
          <FlexTextField
            size="medium"
            placeholder="ハンドルネームを入力"
            inputHooks={handleNameInputHooks}
          />
        </Box>
        <Box className="mt-3">
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

      {/*画面サイズによって消えるエリア*/}
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        {/*選択済みアイテム表示*/}
        <Box className="mt-6 w-full flex overflow-x-scroll">
          {rakutenItemsMock.map((r: RakutenItemBase, i: number) => {
            const item = r.Item;
            return (
              <Box key={i} className="flex justify-center flex-col m-3">
                <ItemCard
                  imageUrl={item.mediumImageUrls[0].imageUrl}
                  name={item.itemName}
                  price={item.itemPrice}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  className="mt-1"
                  onClick={() => console.log(`remove ${item.itemName}`)}
                >
                  選択解除
                </Button>
              </Box>
            );
          })}
        </Box>
        {/*アイテム検索*/}
        <Box className="mt-6">
          <SearchField inputHooks={searchInputHooks} />
          <Box className="flex justify-center">
            <Button variant="contained" color="secondary" className="mt-3">
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
    </>
  );
};
