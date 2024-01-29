import { ImageHooks } from "@/hooks/useImage";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { FC, MutableRefObject } from "react";

interface Props {
  imageRef: MutableRefObject<null>;
  imageHooks: ImageHooks;
}

export const ImageUpload: FC<Props> = (props) => {
  const { imageRef, imageHooks } = props;

  return (
    <Box>
      {imageHooks.imageUrl ? (
        <Box>
          <Box sx={{ height: "400px" }} className="relative">
            <Image
              src={imageHooks.imageUrl}
              alt="image"
              className="object-contain"
              fill
            />
          </Box>
          <Box className="flex justify-center mt-3">
            <Button
              variant="contained"
              color="secondary"
              onClick={imageHooks.clearImage}
            >
              画像を削除
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          className="bg-white flex justify-center items-center rounded-lg"
          sx={{ height: "400px" }}
        >
          <Button component="label" variant="contained" color="secondary">
            画像をアップロード
            <input
              hidden
              type="file"
              id="image"
              name="image"
              accept="image/*"
              ref={imageRef}
              onChange={imageHooks.uploadImage}
            />
          </Button>
        </Box>
      )}
    </Box>
  );
};
