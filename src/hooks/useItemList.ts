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

  const handleSearch = async (keyword: string) => {
    const url = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&keyword=${keyword}&affiliateId=352bd4f5.1c6fc0ac.352bd4f6.8adb50fc&applicationId=1047556559373479761`;
    const result = await fetch(url).then((r) => r.json());
    setItemList(result.Items);
  };

  const itemAction = (index: number, isRemove?: boolean) => {
    if (isRemove) {
      removeItem(index);
    } else {
      addItem(index);
    }
  };
  return { selectedItemList, itemList, setItemList, itemAction, handleSearch };
};
