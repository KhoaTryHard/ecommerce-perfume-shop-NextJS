// components/ProductSwiper.tsx
"use client";
import { useEffect } from "react";

type Product = { seed: string; name: string; price: string; sale?: string };
export default function ProductSwiper({ title, products }: { title: string; products: Product[] }) {
  useEffect(() => {
    const id = setInterval(() => {
      // @ts-ignore
      if ((window as any)?.Swiper) {
        clearInterval(id);
        // @ts-ignore
        new (window as any).Swiper(`.product-swiper[data-title="${title}"]`, {
          slidesPerView: 4,
          spaceBetween: 20,
          pagination: { el: `.product-pagination[data-title="${title}"]`, clickable: true },
          loop: true,
          autoplay: { delay: 3000, disableOnInteraction: false },
          breakpoints: { 0: { slidesPerView: 1 }, 560: { slidesPerView: 2 }, 960: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } },
        });
      }
    }, 150);
    return () => clearInterval(id);
  }, [title]);

  return (
    <>
      <h2>{title}</h2>
      <div className="swiper-container product-swiper" data-title={title}>
        <div className="swiper-wrapper">
          {products.map((p) => (
            <div className="swiper-slide" key={p.seed}>
              <article className="card">
                <img src={`https://picsum.photos/seed/${p.seed}/400/400`} alt={p.name} />
                <h4>{p.name}</h4>
                <div className="price-row-card">
                  <span className="price">{p.price}</span>
                  {p.sale && <span className="badge sale">{p.sale}</span>}
                </div>
                <button className="btn add">Thêm vào giỏ</button>
              </article>
            </div>
          ))}
        </div>
        <div className="product-pagination" data-title={title} />
      </div>
    </>
  );
}
