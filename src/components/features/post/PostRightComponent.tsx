import { ItemCard } from "@/components/ItemCard/ItemCard";
import { ItemBase, RakutenItemBase } from "@/types/rakutenItem";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  items: RakutenItemBase[];
  removeItem: (index: number, isRemove?: boolean) => void;
}

export const PostRightComponent: FC<Props> = (props) => {
  const { items, removeItem } = props;
  return (
    <Box className="">
      <Typography variant="h5" className="text-text font-semibold ">
        選択中のアイテム
      </Typography>

      <Box className="flex flex-col items-center ">
        {items.map((r: RakutenItemBase, i: number) => {
          const item = r.Item;
          return (
            <Box
              key={i}
              sx={{ maxWidth: "256px" }}
              className="flex flex-col justify-center mt-3 "
            >
              <ItemCard
                index={i}
                imageUrl={item.mediumImageUrls[0].imageUrl}
                name={item.itemName}
                price={item.itemPrice}
								itemAction={()=>removeItem(i, true)}

              />
              <Button
                variant="contained"
                color="secondary"
                className="mt-1"
                onClick={() => removeItem(i,true)}
              >
                選択解除
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
