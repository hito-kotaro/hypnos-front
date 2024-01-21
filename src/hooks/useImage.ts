import { useState } from "react";

export const useImage = () => {
  const [image, setImage] = useState({});
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setImage({});
    setImageUrl("");
  };

  return { image, imageUrl, uploadImage, clearImage };
};
