export class Products {
    localAddToCart() {
      throw new Error('Method not implemented.');
    }
    id: string = "";
    name : string = "";
    price : number = 0;
    image : string = "";
    description: string = "";
    quantity: undefined | number;
}

export class cart{
  
  id: string | undefined;
  name : string = "";
  price : number = 0;
  image : string = "";
  description: string = "";
  quantity: undefined | number;
  userId : string="" ;
  productId : string="";

}
