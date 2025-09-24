"use client";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

import BrandCarousel, { Brand } from "@/components/BrandCarousel";
import FilterSidebar, { Filters } from "@/components/FilterSidebar";
import Toolbar from "@/components/Toolbar";
import ProductGrid from "@/components/ProductGrid";
import type { Product } from "@/components/ProductCard";
import { useState, useMemo } from "react";
import { useCart } from "@/app/context/CartContext";

export default function ProductsPage() {
  const { add } = useCart();
  const allBrands = ["Dior","Chanel","Giorgio Armani","Versace","Creed","Gucci"];
  const brands: Brand[] = allBrands.map((b, i) => ({
    name: b,
    img: i === 0 ? "/images/nuoc-hoa-versace-ero.0102019140812.jpg" : `https://picsum.photos/seed/brand${i}/120/80`,
  }));

  const allProducts: Product[] = [
    { id: "p1", name: "Nước Hoa Calvin Klein (CK) CK One Cho Cả Nam Và Nữ, 100ml", price: 950000, sale: 47, image: "https://picsum.photos/seed/p1/400/400", brand: "Chanel", gender: "Unisex" },
    { id: "p2", name: "Nước hoa B", price: 539000, sale: 52, image: "https://picsum.photos/seed/p2/400/400", brand: "Gucci", gender: "Nam" },
    { id: "p3", name: "Nước hoa C", price: 1290000, image: "https://picsum.photos/seed/p3/400/400", brand: "Versace", gender: "Nữ" },
    { id: "p4", name: "Nước hoa D", price: 890000, sale: 20, image: "https://picsum.photos/seed/p4/400/400", brand: "Dior", gender: "Nam" },
    { id: "p5", name: "Nước hoa E", price: 1050000, image: "https://picsum.photos/seed/p5/400/400", brand: "Creed", gender: "Unisex" },
  ];

  const [filters, setFilters] = useState<Filters>({ brands: [], genders: [] });
  const [sort, setSort] = useState("popular");

  const products = useMemo(() => {
    let list = [...allProducts];
    if (filters.brands.length) list = list.filter(p => filters.brands.includes(p.brand ?? ""));
    if (filters.genders.length) list = list.filter(p => filters.genders.includes(p.gender ?? ""));
    const { min, max } = filters.price ?? {};
    if (min != null) list = list.filter(p => p.price >= min);
    if (max != null) list = list.filter(p => p.price <= max);
    if (sort === "price_asc") list.sort((a,b)=>a.price-b.price);
    if (sort === "price_desc") list.sort((a,b)=>b.price-a.price);
    if (sort === "discount_desc") list.sort((a,b)=>(b.sale??0)-(a.sale??0));
    return list;
  }, [filters, sort]);

  return (
    <>
      <Topbar brand="SD Parfum" rightLinks={<><a href="/login">Tài khoản</a><a href="/login">Giỏ hàng</a></>} />
      <div className="container layout">
        <FilterSidebar allBrands={allBrands} value={filters} onChange={setFilters} />
        <div className="content">
          <Toolbar sort={sort} onSortChange={setSort}
            left={<BrandCarousel brands={brands} onPick={(b)=>setFilters(f=>({ ...f, brands: Array.from(new Set([...f.brands, b])) }))} />}
          />
          <ProductGrid products={products} onAdd={(p)=>add({ id: p.id, name: p.name, price: p.price, image: p.image }, 1)} />
        </div>
      </div>
      <Footer />
      <BackToTop threshold={300} />
    </>
  );
}
