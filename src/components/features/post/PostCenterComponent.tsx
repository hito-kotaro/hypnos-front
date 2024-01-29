import { FlexTextField } from "@/components/FlexTextField/FlexTextField";
import { ItemCard } from "@/components/ItemCard/ItemCard";
import { SearchField } from "@/components/SearchField/SearchField";
import { TextInputHooks } from "@/hooks/useTextInput";
import { RakutenItemBase } from "@/types/rakutenItem";
import { Box, Button, Link } from "@mui/material";
import { FC } from "react";
import { useTiptap } from "@/hooks/useTiptap";
import { EditorContent } from "@tiptap/react";
import Avatar from "boring-avatars";
import parse from "html-react-parser";

interface Props {
  rakutenItemList: RakutenItemBase[];
  selectedItemList: RakutenItemBase[];
  titleInputHooks: TextInputHooks;
  handleNameInputHooks: TextInputHooks;
  bodyInputHooks: TextInputHooks;
  searchInputHooks: TextInputHooks;
  itemAction: (index: number, isRemove?: boolean) => void;
  handleSearch: (keyword: string) => void;
}

export const PostCenterComponent: FC<Props> = (props) => {
  const {
    rakutenItemList,
    selectedItemList,
    titleInputHooks,
    handleNameInputHooks,
    searchInputHooks,
    itemAction,
    handleSearch,
  } = props;

  const editorHooks = useTiptap();
  //  const displayHooks = useHTMLDisplay("<h1>hello</h1>");

  return (
    <>
      <Box className="mb-5 flex justify-between items-center">
        {/*コンテンツヘッダ*/}
        <Link href="/" underline="none" className="text-gray-800">
          投稿をやめる
        </Link>
        <Button variant="contained" color="secondary">
          投稿する
        </Button>
      </Box>
      {/*画像アップロード
			<ImageUpload imageRef={imageRef} imageHooks={imageHooks}/>
			*/}

      {/*アバター表示*/}
      <Box className="flex justify-center ">
        <Avatar size={200} variant="beam" name={handleNameInputHooks.value} />
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

        {/*本文入力欄*/}
        <Box className="mt-3">
          <EditorContent editor={editorHooks.editor} />
          {parse(editorHooks.editor?.getHTML() ?? "")}
        </Box>
      </Box>

      {/*画面サイズによって消えるエリア*/}
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        {/*選択済みアイテム表示*/}
        <Box className="mt-6 w-full flex overflow-x-scroll">
          {selectedItemList.map((r: RakutenItemBase, i: number) => {
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
                  onClick={() => itemAction(i, true)}
                >
                  選択解除
                </Button>
              </Box>
            );
          })}
        </Box>
        {/*アイテム検索*/}
        <Box className="mt-6">
          <SearchField
            inputHooks={searchInputHooks}
            handleSearch={handleSearch}
            buttonLabel="楽天でアイテムを検索"
            placeholder="アイテム名を入力"
          />
          <Box className="flex justify-center">
            <Button variant="contained" color="secondary" className="mt-3">
              楽天市場でアイテムを探す
            </Button>
          </Box>
        </Box>
        {/*検索結果表示エリア*/}
        <Box>
          {rakutenItemList.map((r: RakutenItemBase, i: number) => {
            const item = r.Item;
            return (
              <Box key={i} className="flex justify-center mt-3">
                <button
                  type="button"
                  className="border-none p-0 drop-shadow-lg hover:drop-shadow-none rounded-lg cursor-pointer"
                  onClick={() => itemAction(i)}
                >
                  <ItemCard
                    imageUrl={item.mediumImageUrls[0].imageUrl}
                    name={item.itemName}
                    price={item.itemPrice}
                  />
                </button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
