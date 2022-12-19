export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  title: string,
  createAd: Date,
  stock: number,
  size?: Sizes
};
