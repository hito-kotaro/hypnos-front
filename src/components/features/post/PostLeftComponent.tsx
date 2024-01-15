import { ItemCard } from "@/components/ItemCard/ItemCard";
import { SearchField } from "@/components/SearchField/SearchField";
import { TextInputHooks } from "@/hooks/useTextInput";
import { RakutenItemBase } from "@/types/rakutenItem";
import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  rakutenItems: RakutenItemBase[];
  searchInputHooks: TextInputHooks;
  handleSearch: (keyword: string) => void;
  addItem: (index: number, isRemove?: boolean) => void;
}

export const PostLeftComponent: FC<Props> = (props) => {
  const { rakutenItems, searchInputHooks, handleSearch, addItem } = props;

  return (
    <Box className="">
      <Box>
        <SearchField
          inputHooks={searchInputHooks}
          handleSearch={handleSearch}
        />
      </Box>
      {rakutenItems.length === 0 ? (
        <Box>アイテム名を入力して検索</Box>
      ) : (
        <Box>
          {rakutenItems.map((r: RakutenItemBase, i: number) => {
            const item = r.Item;
            return (
              <Box key={i} className="flex justify-center mt-3">
                <button
                  type="button"
                  className="border-none p-0 drop-shadow-lg hover:drop-shadow-none rounded-lg cursor-pointer"
                  onClick={() => addItem(i)}
                >
                  <ItemCard
                    index={i}
                    imageUrl={item.mediumImageUrls[0].imageUrl}
                    name={item.itemName}
                    price={item.itemPrice}
                  />
                </button>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
