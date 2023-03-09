type Color = "RED" | "GREEN" | "BLUE";
type Size = "SMALL" | "MEDIUM" | "LARGE" | "HUGE";

export type Product = {
  color: Color;
  size: Size;
  name: string;
};

export function ProductFilter() {
  return {
    filterByColor: (products: Product[], color: Color) =>
      products.filter((product) => product.color === color),
    filterBySize: (products: Product[], size: Size) =>
      products.filter((product) => product.size === size),
    filterBySizeAndColor: (products: Product[], size: Size, color: Color) =>
      products.filter(
        (product) => product.size === size && product.color === color
      ),
  };
}
