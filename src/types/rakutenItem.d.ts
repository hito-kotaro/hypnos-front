export interface ItemBase {
  affiliateUrl: string;
  itemName: string;
  itemPrice: number;
  mediumImageUrls: { imageUrl: string }[];
  smallImageUrls: { imageUrl: string }[];
}

export interface RakutenItemBase {
  Item: ItemBase;
}

