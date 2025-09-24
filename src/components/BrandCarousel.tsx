"use client";
import { useRef } from "react";

export type Brand = { name: string; img: string };

export default function BrandCarousel({
  brands,
  onPick,                       // callback prop
  itemWidth = 200,              // optional prop
  children,                     // children prop (VD: nut mo filter)
}: {
  brands: Brand[];
  onPick?: (brand: string) => void;
  itemWidth?: number;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dx: number) => ref.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <div className="brand-carousel">
      <button className="prev" onClick={() => scrollBy(-itemWidth)} aria-label="Prev">&#10094;</button>
      <div className="brand-list" ref={ref}>
        {brands.map(b => (
          <button key={b.name} className="brand-item" onClick={() => onPick?.(b.name)}>
            <img src={b.img} alt={b.name} />
            <span>{b.name}</span>
          </button>
        ))}
      </div>
      <button className="next" onClick={() => scrollBy(itemWidth)} aria-label="Next">&#10095;</button>
      {children}
    </div>
  );
}
