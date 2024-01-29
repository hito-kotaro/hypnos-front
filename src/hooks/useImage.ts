import { useState } from "react";

export interface ImageHooks {
  imageUrl: string;
  uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearImage: () => void;
}

export const useImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setImageUrl("");
  };

  return { imageUrl, uploadImage, clearImage };
};
