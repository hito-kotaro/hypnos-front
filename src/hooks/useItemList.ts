import { RakutenItemBase } from "@/types/rakutenItem";
import { useState } from "react";

export const useItemList = () => {
  const [itemList, setItemList] = useState<RakutenItemBase[]>([]);
  const [selectedItemList, setSelectedItemList] = useState<RakutenItemBase[]>(
    [],
  );

  const addItem = (index: number) => {
    // selectedに加える
    const newItems = [...selectedItemList];
    newItems.push(itemList[index]);
    setSelectedItemList(newItems);
  };

  const removeItem = (index: number) => {
    // selectedから削除する
    const newSelectedItemList = selectedItemList.filter((_, i: number) => {
      return index !== i;
    });
    setSelectedItemList(newSelectedItemList);
  };

  const itemAction = (index: number, isRemove?: boolean) => {
    if (isRemove) {
      removeItem(index);
    } else {
      addItem(index);
    }
  };
  return { selectedItemList, itemList, setItemList, itemAction };
};
