export interface RakutenItemBase {
	Item:{
		affiliateUrl: string
		itemName:string
		itemPrice:number
		mediumImageUrls:{imageUrl:string}[]
		smallImageUrls:{imageUrl:string}[]
	}
}
