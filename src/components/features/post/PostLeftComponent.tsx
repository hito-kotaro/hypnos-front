import { ItemCard } from "@/components/ItemCard/ItemCard";
import { SearchField } from "@/components/SearchField/SearchField";
import { TextInputHooks } from "@/hooks/useTextInput";
import { rakutenItemsMock } from "@/mock/rakutenItemMock";
import { RakutenItemBase } from "@/types/rakutenItem";
import { Box, Button } from "@mui/material";
import { FC } from "react";

interface Props {
  searchInputHooks: TextInputHooks;
}

export const PostLeftComponent: FC<Props> = (props) => {
  const { searchInputHooks } = props;

  return (
    <Box className="my-2">
      <Box>
        <SearchField inputHooks={searchInputHooks} />
        <Button variant="contained" color="secondary" className="mt-3">
          楽天でアイテムを検索
        </Button>
      </Box>
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
  );
};
