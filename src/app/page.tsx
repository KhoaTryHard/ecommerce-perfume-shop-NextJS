"use client";

import Topbar from "@/components/Topbar";
import BannerSwiper from "@/components/BannerSwiper";
import ProductSwiper from "@/components/ProductSwiper";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

export default function HomePage() {
  const products = [
    { seed: "p1", name: "Nước Hoa Nam Versace Eros Man EDT 5ml", price: "199.000 đ", sale: "-47%" },
    { seed: "p2", name: "Nước Hoa Calvin Klein (CK) CK One Cho Cả Nam Và Nữ, 100ml", price: "539.000 đ", sale: "-52%" },
    { seed: "p3", name: "Nước hoa C", price: "1.290.000 đ" },
    { seed: "p4", name: "Nước hoa D", price: "890.000 đ", sale: "-20%" },
    { seed: "p5", name: "Nước hoa E", price: "1.050.000 đ" },
  ];

  return (
    <>
      <Topbar
        brand="SD Parfum"
        onSearch={(q) => console.log("Searching:", q)}
        rightLinks={
          <>
            <a href="/login">Tài khoản</a>
            <a href="/login">Giỏ hàng</a>
          </>
        }
      />

      <main>
        <BannerSwiper
          images={[
            { href: "/products", src: "/images/Photoroom_20250412_184802.JPG", alt: "Image 1" },
            { href: "/products", src: "/images/Photoroom_20250412_185500.JPG", alt: "Image 2" },
            { href: "/products", src: "/images/Photoroom_20250412_185840.JPG", alt: "Image 3" },
          ]}
        />
        <ProductSwiper title="SẢN PHẨM MỚI" products={products} />
        <ProductSwiper title="SẢN PHẨM NỔI BẬT" products={products} />
      </main>

      <Footer />
      <BackToTop threshold={300} onShowChange={(s) => console.log("BackToTop:", s)} />
    </>
  );
}
