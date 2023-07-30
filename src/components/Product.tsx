import { IProduct } from "../App";

interface ProductProps {
  product: IProduct;
  handleAddToCartClick(id: number): void;
}

export default function Product({
  product,
  handleAddToCartClick,
}: ProductProps) {
  return (
    <div>
      <div>{product.title}</div>
      <button onClick={() => handleAddToCartClick(product.id)}>
        Add To Cart
      </button>
    </div>
  );
}
