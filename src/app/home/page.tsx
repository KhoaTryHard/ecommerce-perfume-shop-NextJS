"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function HomePage() {
  useEffect(() => {
    // Back to top
    const btnTop = document.querySelector<HTMLButtonElement>(".btn-top");
    const toggleTop = () => {
      if (!btnTop) return;
      if (window.scrollY > 300) btnTop.classList.add("show");
      else btnTop.classList.remove("show");
    };
    window.addEventListener("scroll", toggleTop);
    btnTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    toggleTop();

    // Swiper init (chờ Script CDN load xong)
    const startSwiper = () => {
      // @ts-ignore
      if (typeof window !== "undefined" && (window as any).Swiper) {
        // Banner
        // @ts-ignore
        new (window as any).Swiper(".swiper-container", {
          slidesPerView: 1,
          spaceBetween: 100,
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          loop: true,
          autoplay: { delay: 3000, disableOnInteraction: false },
        });
        // Product
        // @ts-ignore
        new (window as any).Swiper(".product-swiper", {
          slidesPerView: 4,
          spaceBetween: 20,
          pagination: { el: ".product-pagination", clickable: true },
          loop: true,
          autoplay: { delay: 3000, disableOnInteraction: false },
          breakpoints: { 0: { slidesPerView: 1 }, 560: { slidesPerView: 2 }, 960: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } },
        });
      }
    };

    // cố gắng khởi tạo nhiều lần trong trường hợp script load trễ
    const id = setInterval(() => {
      // @ts-ignore
      if ((window as any)?.Swiper) {
        clearInterval(id);
        startSwiper();
      }
    }, 150);
    setTimeout(() => clearInterval(id), 4000);

    return () => {
      window.removeEventListener("scroll", toggleTop);
    };
  }, []);

  return (
    <>
      {/* Swiper CSS + JS CDN */}
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
      <Script src="https://unpkg.com/swiper/swiper-bundle.min.js" strategy="afterInteractive" />

      {/* TOPBAR */}
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="/home" className="brand">SD Parfum</a>
          <div className="search">
            <input id="q" type="search" placeholder="Tìm kiếm sản phẩm, thương hiệu…" />
            <button id="btn-search" title="Tìm kiếm" aria-label="Tìm kiếm">🔍</button>
          </div>
          <nav className="quick-links" aria-label="Liên kết nhanh">
            <a href="/login">Tài khoản</a>
            <a href="/login">Giỏ hàng</a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main>
        {/* Swiper hình ảnh */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="/">
                <img src="/images/Photoroom_20250412_184802.JPG" alt="Image 1" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/">
                <img src="/images/Photoroom_20250412_185500.JPG" alt="Image 2" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/">
                <img src="/images/Photoroom_20250412_185840.JPG" alt="Image 3" />
              </a>
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>

        {/* Swiper sản phẩm – SẢN PHẨM MỚI */}
        <h2>SẢN PHẨM MỚI</h2>
        <div className="swiper-container product-swiper">
          <div className="swiper-wrapper">
            {[
              { seed: "p1", name: "Nước hoa A", price: "950.000 đ", sale: "-47%" },
              { seed: "p2", name: "Nước hoa B", price: "539.000 đ", sale: "-52%" },
              { seed: "p3", name: "Nước hoa C", price: "1.290.000 đ" },
              { seed: "p4", name: "Nước hoa D", price: "890.000 đ", sale: "-20%" },
              { seed: "p5", name: "Nước hoa E", price: "1.050.000 đ" },
            ].map((p) => (
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
          <div className="product-pagination" />
        </div>

        {/* Swiper sản phẩm – SẢN PHẨM NỔI BẬT */}
        <h2>SẢN PHẨM NỔI BẬT</h2>
        <div className="swiper-container product-swiper">
          <div className="swiper-wrapper">
            {[
              { seed: "p1", name: "Nước hoa A", price: "950.000 đ", sale: "-47%" },
              { seed: "p2", name: "Nước hoa B", price: "539.000 đ", sale: "-52%" },
              { seed: "p3", name: "Nước hoa C", price: "1.290.000 đ" },
              { seed: "p4", name: "Nước hoa D", price: "890.000 đ", sale: "-20%" },
              { seed: "p5", name: "Nước hoa E", price: "1.050.000 đ" },
            ].map((p) => (
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
          <div className="product-pagination" />
        </div>
      </main>

      {/* FOOTER (giữ nguyên cấu trúc & class để dùng chung CSS) */}
      <footer className="site-footer">
        <div className="footer-social">
          <a href="#" aria-label="Địa chỉ"><i className="fa-solid fa-location-dot" /></a>
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
          <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
          <a href="#" aria-label="Hotline"><i className="fa-solid fa-phone" /></a>
        </div>

        <div className="footer-columns container">
          <div className="footer-col">
            <h3>GIỚI THIỆU</h3>
            <ul>
              <li><a href="#">Giới thiệu về SD Parfum</a></li>
              <li><a href="#">Quan điểm kinh doanh</a></li>
              <li><a href="#">Bản quyền &amp; Sở hữu</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>CHÍNH SÁCH CÔNG TY</h3>
            <ul>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật thông tin</a></li>
              <li><a href="#">Chính sách vận chuyển, giao nhận, kiểm hàng</a></li>
              <li><a href="#">Chính sách bảo hành</a></li>
              <li><a href="#">Chính sách đổi trả</a></li>
              <li><a href="#">Nhượng Quyền Thương Hiệu</a></li>
              <li><a href="#">Trả góp 0% qua thẻ tín dụng</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>TRỢ GIÚP</h3>
            <ul>
              <li><a href="#">Hướng dẫn sử dụng nước hoa</a></li>
              <li><a href="#">Hướng dẫn mua hàng</a></li>
              <li><a href="#">Phương thức thanh toán</a></li>
              <li><a href="#">Gói quà miễn phí</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>THÔNG TIN KHÁC</h3>
            <ul>
              <li><a href="#">Hoạt động TGNH</a></li>
              <li><a href="#">Member Card</a></li>
              <li><a href="#">Gift Voucher</a></li>
              <li><a href="#">Tuyển dụng</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>LIÊN HỆ</h3>
            <ul>
              <li><a href="#">Hệ thống showroom</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-sep" />

        <div className="footer-bottom container">
          <p><strong>Copyright © 2008 Công ty CPTM SD SHOP &amp; Mỹ Phẩm.</strong></p>
          <p>Giấy chứng nhận ĐKKD số: 0317116620 do Sở KH&amp;ĐT TPHCM cấp lần đầu ngày 10/01/2022.</p>
          <p>Địa chỉ: 10-10B Cách Mạng Tháng 8, Phường Bến Thành, TP. Hồ Chí Minh</p>
          <p>Điện thoại: 0337 990 731 - Đặt hàng: 0337 990 731 - CSKH: 0337 990 731</p>
        </div>

        <div className="floating-actions">
          <a className="fb" href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
          <a className="phone" href="#" aria-label="Gọi điện"><i className="fa-solid fa-phone" /></a>
          <a className="zalo" href="#" aria-label="Zalo">Zalo</a>
          <a className="mess" href="#" aria-label="Messenger"><i className="fa-brands fa-facebook-messenger" /></a>
        </div>

        <button className="btn-top" aria-label="Lên đầu trang" title="Lên đầu trang">
          <i className="fa-solid fa-arrow-up" />
        </button>
      </footer>
    </>
  );
}
