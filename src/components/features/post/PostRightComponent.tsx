import { ItemCard } from "@/components/ItemCard/ItemCard";
import { rakutenItemsMock } from "@/mock/rakutenItemMock";
import { RakutenItemBase } from "@/types/rakutenItem";
import { Box, Button, Typography } from "@mui/material";

export const PostRightComponent = () => {
  return (
    <Box className="">
      <Typography variant="h5" className="text-text font-semibold ">
        選択中のアイテム
      </Typography>

      <Box className="flex flex-col items-center ">
        {rakutenItemsMock.map((r: RakutenItemBase, i: number) => {
          const item = r.Item;
          return (
            <Box
              key={i}
              sx={{ maxWidth: "256px" }}
              className="flex flex-col justify-center mt-3 "
            >
              <ItemCard
                imageUrl={item.mediumImageUrls[0].imageUrl}
                name={item.itemName}
                price={item.itemPrice}
              />
              <Button variant="contained" color="secondary" className="mt-1">
                選択解除
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
