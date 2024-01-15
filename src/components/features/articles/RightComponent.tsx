import { ItemCard } from "@/components/ItemCard/ItemCard";
import { RakutenItemBase } from "@/types/rakutenItem";
import { Box, Link } from "@mui/material";
import { FC } from "react";

interface Props {
  items: RakutenItemBase[];
}

export const RightComponent: FC<Props> = (props) => {
  const { items } = props;
  return (
    <Box className="flex flex-col items-center">
      {items.map((r: RakutenItemBase, index: number) => {
        const item = r.Item;
        return (
          <Box key={index} className="mt-3">
            <Link href={r.Item.affiliateUrl} color="secondary" underline="none">
              <ItemCard
                imageUrl={item.mediumImageUrls[0].imageUrl}
                name={item.itemName}
                price={item.itemPrice}
              />
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};
