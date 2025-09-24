export type Product = {
  id: string;
  name: string;
  price: number;
  sale?: number; // -47 -> 47
  image: string;
  brand?: string;
  gender?: "Nam" | "Nữ" | "Unisex";
};

export function ProductCard({
  p, onAdd, priceFormat = (n:number)=>n.toLocaleString("vi-VN")+" đ", // optional prop
}: {
  p: Product;
  onAdd: (p: Product) => void;  // callback prop
  priceFormat?: (n: number) => string;
}) {
  return (
    <article className="card">
      <img src={p.image} alt={p.name} />
      <h4>{p.name}</h4>
      <div className="price-row-card">
        <span className="price">{priceFormat(p.price)}</span>
        {p.sale && <span className="badge sale">-{p.sale}%</span>}
      </div>
      <button className="btn add" onClick={() => onAdd(p)}>Thêm vào giỏ</button>
    </article>
  );
}
