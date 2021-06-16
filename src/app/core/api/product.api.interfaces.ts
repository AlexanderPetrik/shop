export interface Product {
  title: string;
  description: string;
  price: number;
  qty: number;
  image?: string;
  discount?: number;
  currency?: string;
  infoFields?: any[];
  id?: number;
}
