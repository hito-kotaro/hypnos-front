import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
}

export const ItemCard: FC<Props> = (props) => {
  const { imageUrl, name, price } = props;
  return (
    <button
      type="button"
      className="border-none p-0 drop-shadow-lg hover:drop-shadow-none rounded-lg cursor-pointer"
    >
      <Box sx={{ width: "265px" }} className="bg-white rounded-lg">
        {/*画像表示エリア*/}
        <Box sx={{ height: "100px" }} className="rounded-t-lg">
          <Image
            width={265}
            height={100}
            src={imageUrl}
            alt="itemImage"
            className="rounded-t-lg"
          />
        </Box>

        {/*テキスト表示エリア*/}
        <Box className="px-2">
          {/*金額表示エリア*/}
          <Box className="flex justify-end">
            <Typography variant="body1">{`${price}円`}</Typography>
          </Box>
          {/*アイテム名表示エリア*/}
          <Box>{name}</Box>
        </Box>
      </Box>
    </button>
  );
};
