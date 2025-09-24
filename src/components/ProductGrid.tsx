import { Product, ProductCard } from "./ProductCard";

export default function ProductGrid({
  products,
  onAdd,
}: {
  products: Product[];
  onAdd: (p: Product) => void;
}) {
  return (
    <div className="product-grid" aria-live="polite">
      {products.map(p => <ProductCard key={p.id} p={p} onAdd={onAdd} />)}
    </div>
  );
}
