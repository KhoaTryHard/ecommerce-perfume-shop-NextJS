"use client";

import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  // --- Brand carousel ---
  const brandListRef = useRef<HTMLDivElement | null>(null);
  const handleNext = () => brandListRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  const handlePrev = () => brandListRef.current?.scrollBy({ left: -200, behavior: "smooth" });

  // --- Back to top ---
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const toggleTop = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", toggleTop);
    toggleTop();
    return () => window.removeEventListener("scroll", toggleTop);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="/home" className="brand">SD Parfum</a>

          <div className="search" role="search">
            <input id="q" type="search" placeholder="Tìm kiếm sản phẩm, thương hiệu…" />
            <button id="btn-search" title="Tìm kiếm" aria-label="Tìm kiếm">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </div>

          <nav className="quick-links" aria-label="Liên kết nhanh">
            <a href="/login">Tài khoản</a>
            <a href="/cart">Giỏ hàng</a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <div className="container layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="filter-group">
            <div className="group-title">Thương hiệu</div>
            <input id="brand-filter" className="filter-search" placeholder="Tìm thương hiệu…" />
            <div id="brand-list" className="checkbox-list">
              <label className="cb"><input type="checkbox" /> Dior</label>
              <label className="cb"><input type="checkbox" /> Chanel</label>
              <label className="cb"><input type="checkbox" /> Gucci</label>
              <label className="cb"><input type="checkbox" /> Lancome</label>
              <label className="cb"><input type="checkbox" /> Chloe</label>
              <label className="cb"><input type="checkbox" /> D&amp;G</label>
              <label className="cb"><input type="checkbox" /> Marc Jacobs</label>
              <label className="cb"><input type="checkbox" /> Estee Lauder</label>
              <label className="cb"><input type="checkbox" /> Guerlain</label>
              <label className="cb"><input type="checkbox" /> Estee Lauder</label>
              <label className="cb"><input type="checkbox" /> Giorgio Armani</label>
              <label className="cb"><input type="checkbox" /> Calvin Klein</label>
              <label className="cb"><input type="checkbox" /> Burberry</label>
              <label className="cb"><input type="checkbox" /> Tom Ford</label>
            </div>
          </div>

          <div className="filter-group">
            <div className="group-title">Giới tính</div>
            <div id="brand-list" className="checkbox-list">
              <label className="cb"><input type="checkbox" name="gender" value="Nam" /> Nam</label>
              <label className="cb"><input type="checkbox" name="gender" value="Nữ" /> Nữ</label>
              <label className="cb"><input type="checkbox" name="gender" value="Unisex" /> Unisex</label>
            </div>
          </div>

          <div className="filter-group">
            <div className="group-title">Khoảng giá</div>
            <div className="price-row">
              <input id="min-price" type="number" min={0} placeholder="Từ (VND)" />
              <span>—</span>
              <input id="max-price" type="number" min={0} placeholder="Đến (VND)" />
            </div>
            <button id="btn-apply-price" className="btn small">Áp dụng</button>
            <button id="btn-clear" className="btn small ghost">Xóa lọc</button>
          </div>

          <div className="filter-group">
            <div className="group-title">Dung tích</div>
            <input id="brand-filter" className="filter-search" placeholder="Tìm kiếm" />
            <div id="brand-list" className="checkbox-list">
              <label className="cb"><input type="checkbox" name="capacity" value="100ml" /> 100ml</label>
              <label className="cb"><input type="checkbox" name="capacity" value="50ml" /> 50ml</label>
              <label className="cb"><input type="checkbox" name="capacity" value="30ml" /> 30ml</label>
              <label className="cb"><input type="checkbox" name="capacity" value="10ml" /> 10ml</label>
              <label className="cb"><input type="checkbox" name="capacity" value="5ml" /> 5ml</label>
            </div>
          </div>

          <div className="filter-group">
            <div className="group-title">Nhóm hương</div>
            <input id="brand-filter" className="filter-search" placeholder="Tìm kiếm" />
            <div id="brand-list" className="checkbox-list">
              <label className="cb"><input type="checkbox" name="fragrance-family" value="Nhóm hương thực phẩm Gourmand" /> Nhóm hương thực phẩm – Gourmand</label>
              <label className="cb"><input type="checkbox" name="fragrance-family" value="Nhóm hương gia vị – Spicy" /> Nhóm hương gia vị – Spicy</label>
              <label className="cb"><input type="checkbox" name="fragrance-family" value="Nhóm hương Síp – Chypre" /> Nhóm hương Síp – Chypre</label>
              <label className="cb"><input type="checkbox" name="fragrance-family" value="Nhóm mùi hương thảo mộc – Aromatic" /> Nhóm mùi hương thảo mộc – Aromatic</label>
              <label className="cb"><input type="checkbox" name="fragrance-family" value="Nhóm hương phương Đông – Oriental" /> Nhóm hương phương Đông – Oriental</label>
              <label className="cb"><input type="checkbox" name="fragrance-family" value="Nhóm hương da thuộc – Leather" /> Nhóm hương da thuộc – Leather</label>
              <label className="cb"><input type="checkbox" name="fragrance-family" value="Nhóm hương gỗ & rêu – Woody" /> Nhóm hương gỗ & rêu – Woody</label>
              <label className="cb"><input type="checkbox" name="fragrance-family" value="Nhóm hương trái cây – Fruity" /> Nhóm hương trái cây – Fruity</label>
              <label className="cb"><input type="checkbox" name="fragrance-family" value="Nhóm hương hoa cỏ – Floral" /> Nhóm hương hoa cỏ – Floral</label>
              <label className="cb"><input type="checkbox" name="fragrance-family" value="Nhóm hương cam chanh – Citrus" /> Nhóm hương cam chanh – Citrus</label>
            </div>
          </div>

          <div className="filter-group">
            <div className="group-title">Phong cách</div>
            <input id="brand-list" className="filter-search" placeholder="Tìm kiếm" />
            <div id="brand-list" className="checkbox-list">
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Nam tính, lịch lãm, sang trọng" /> Nam tính, lịch lãm, sang trọng</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Nam tính, tươi mát" /> Nam tính, tươi mát</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Sang trọng, quyến rũ, ngọt ngào" /> Sang trọng, quyến rũ, ngọt ngào</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Cuốn hút, mạnh mẽ, nam tính" /> Cuốn hút, mạnh mẽ, nam tính</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Ngọt ngào, gợi cảm, nữ tính" /> Ngọt ngào, gợi cảm, nữ tính</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Tao nhã, thanh lịch, tươi mát" /> Tao nhã, thanh lịch, tươi mát</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Nữ tính, dịu dàng, trang nhã" /> Nữ tính, dịu dàng, trang nhã</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Cuốn hút, mạnh mẽ, sang trọng" /> Cuốn hút, mạnh mẽ, sang trọng</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Nhẹ nhàng, tinh tế, gần gũi" /> Nhẹ nhàng, tinh tế, gần gũi</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Cá tính, hiện đại, trẻ trung" /> Cá tính, hiện đại, trẻ trung</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Quyến rũ, gợi cảm, tinh tế" /> Quyến rũ, gợi cảm, tinh tế</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Quyến rũ, nữ tính, ngọt ngào" /> Quyến rũ, nữ tính, ngọt ngào</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Nam tính, lịch lãm, phong cách" /> Nam tính, lịch lãm, phong cách</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Bí ẩn, gợi cảm, quyến rũ" /> Bí ẩn, gợi cảm, quyến rũ</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Lịch lãm, phong trần, trầm ấm" /> Lịch lãm, phong trần, trầm ấm</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Ngọt ngào, tươi trẻ" /> Ngọt ngào, tươi trẻ</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Nữ tính, hiện đại, tự tin, cuốn hút" /> Nữ tính, hiện đại, tự tin, cuốn hút</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Quyến rũ, ngọt ngào, dịu dàng" /> Quyến rũ, ngọt ngào, dịu dàng</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Nữ tính, quyến rũ, sang trọng" /> Nữ tính, quyến rũ, sang trọng</label>
              <label className="cb"><input type="checkbox" name="fragrance-style" value="Tươi mát, trẻ trung, năng động" /> Tươi mát, trẻ trung, năng động</label>
            </div>
          </div>

          <div className="filter-group">
            <div className="group-title">Xuất xứ thương hiệu</div>
            <input id="brand-origin" className="filter-search" placeholder="Tìm kiếm" />
            <div id="brand-list" className="checkbox-list">
              <label className="cb"><input type="checkbox" name="brand-origin" value="Viet-Nam" /> Việt Nam</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="France" /> Pháp</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="Italy" /> Ý</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="United-Kingdom" /> Anh</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="USA" /> Mỹ</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="D&G" /> D&amp;G</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="Marc Jacobs" /> Marc Jacobs</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="Estee Lauder" /> Estee Lauder</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="Guerlain" /> Guerlain</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="Estee Lauder 2" /> Estee Lauder</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="Giorgio Armani" /> Giorgio Armani</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="Calvin Klein" /> Calvin Klein</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="Burberry" /> Burberry</label>
              <label className="cb"><input type="checkbox" name="brand-origin" value="Tom Ford" /> Tom Ford</label>
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="content">
          <div className="chips-row" id="brand-chips" />

          <div className="toolbar">
            <div className="toolbar-left">
              <div className="brand-carousel">
                <button className="prev" onClick={handlePrev} aria-label="Prev">&#10094;</button>

                <div className="brand-list" ref={brandListRef}>
                  <div className="brand-item">
                    <img src="/images/nuoc-hoa-versace-ero.0102019140812.jpg" alt="Dior" />
                    <span>Dior</span>
                  </div>
                  <div className="brand-item">
                    <img src="https://picsum.photos/seed/p1/400/400" alt="Chanel" />
                    <span>Chanel</span>
                  </div>
                  <div className="brand-item">
                    <img src="https://picsum.photos/seed/p1/400/400" alt="Giorgio Armani" />
                    <span>Giorgio Armani</span>
                  </div>
                  <div className="brand-item">
                    <img src="https://via.placeholder.com/80x60?text=Versace" alt="Versace" />
                    <span>Versace</span>
                  </div>
                  <div className="brand-item">
                    <img src="https://via.placeholder.com/80x60?text=Creed" alt="Creed" />
                    <span>Creed</span>
                  </div>
                  <div className="brand-item">
                    <img src="https://via.placeholder.com/80x60?text=Gucci" alt="Gucci" />
                    <span>Gucci</span>
                  </div>
                </div>

                <button className="next" onClick={handleNext} aria-label="Next">&#10095;</button>
              </div>
            </div>

            <div className="toolbar-right">
              <label htmlFor="sort">Sắp xếp:</label>
              <select id="sort">
                <option value="popular">Phổ biến</option>
                <option value="price_asc">Giá tăng dần</option>
                <option value="price_desc">Giá giảm dần</option>
                <option value="discount_desc">Giảm giá nhiều</option>
                <option value="rating_desc">Đánh giá cao</option>
                <option value="newest">Mới nhất</option>
              </select>
            </div>
          </div>

          <div id="grid" className="product-grid" aria-live="polite">
            <article className="card">
              <img src="https://picsum.photos/seed/p1/400/400" alt="Nước hoa A" />
              <h4>Nước hoa A</h4>
              <div className="price-row-card">
                <span className="price">950.000 đ</span>
                <span className="badge sale">-47%</span>
              </div>
              <button className="btn add">Thêm vào giỏ</button>
            </article>

            <article className="card">
              <img src="https://picsum.photos/seed/p2/400/400" alt="Nước hoa B" />
              <h4>Nước hoa B</h4>
              <div className="price-row-card">
                <span className="price">539.000 đ</span>
                <span className="badge sale">-52%</span>
              </div>
              <button className="btn add">Thêm vào giỏ</button>
            </article>

            <article className="card">
              <img src="https://picsum.photos/seed/p3/400/400" alt="Nước hoa C" />
              <h4>Nước hoa C</h4>
              <div className="price-row-card">
                <span className="price">1.290.000 đ</span>
              </div>
              <button className="btn add">Thêm vào giỏ</button>
            </article>

            <article className="card">
              <img src="https://picsum.photos/seed/p4/400/400" alt="Nước hoa D" />
              <h4>Nước hoa D</h4>
              <div className="price-row-card">
                <span className="price">890.000 đ</span>
                <span className="badge sale">-20%</span>
              </div>
              <button className="btn add">Thêm vào giỏ</button>
            </article>

            <article className="card">
              <img src="https://picsum.photos/seed/p5/400/400" alt="Nước hoa E" />
              <h4>Nước hoa E</h4>
              <div className="price-row-card">
                <span className="price">1.050.000 đ</span>
              </div>
              <button className="btn add">Thêm vào giỏ</button>
            </article>

            <article className="card">
              <img src="https://picsum.photos/seed/p6/400/400" alt="Nước hoa F" />
              <h4>Nước hoa F</h4>
              <div className="price-row-card">
                <span className="price">699.000 đ</span>
              </div>
              <button className="btn add">Thêm vào giỏ</button>
            </article>

            <article className="card">
              <img src="https://picsum.photos/seed/p7/400/400" alt="Nước hoa G" />
              <h4>Nước hoa G</h4>
              <div className="price-row-card">
                <span className="price">1.990.000 đ</span>
                <span className="badge sale">-31%</span>
              </div>
              <button className="btn add">Thêm vào giỏ</button>
            </article>

            <article className="card">
              <img src="https://picsum.photos/seed/p8/400/400" alt="Nước hoa H" />
              <h4>Nước hoa H</h4>
              <div className="price-row-card">
                <span className="price">459.000 đ</span>
              </div>
              <button className="btn add">Thêm vào giỏ</button>
            </article>
          </div>

          <div id="pagination" className="pagination" />
        </main>
      </div>

      {/* BLOG */}
      <div className="blog">
        <h4>Nước Hoa – Nơi Chứa Đựng Những Mùi Hương Cám Dỗ Bậc Nhất Thế giới</h4>
        <p>
          Đến tận ngày nay vẫn chưa ai biết rõ chính xác nguồn gốc của những chai
          nước hoa từ đâu mà có, huyền bí như cách các mùi hương toả ngát trên da thịt...
        </p>
        <p>
          Nước hoa đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày...
        </p>
        <p>
          Nước hoa có lịch sử lâu đời, bắt đầu từ các nền văn minh cổ đại như Ai Cập...
        </p>
        <p>
          Trong cuộc sống, nước hoa không đơn giản là mang lại mùi hương thơm ngát...
        </p>

        <h3>Kiến thức về mùi hương của nước hoa</h3>
        <h4>Nốt hương nước hoa</h4>
        <p>
          Nước hoa thường được tạo thành từ ba tầng hương chính: nốt hương đầu, nốt hương giữa và nốt hương cuối...
        </p>

        <ul>
          <li>
            <strong>Nốt hương đầu (Top Notes): </strong>
            … tồn tại từ 15 phút đến 1 giờ trước khi phai dần để chuyển sang nốt hương tiếp theo.
          </li>
          <li>
            <strong>(Heart Notes):</strong> … định hình bản sắc của mùi hương …
          </li>
          <li>
            <strong>Nốt hương cuối (Base Notes):</strong> … mang đến cảm giác sang trọng, ấm áp …
          </li>
        </ul>

        <strong>Ví dụ: </strong>
        <ul>
          <li>Chanel No. 5: …</li>
          <li>Dior Sauvage: …</li>
        </ul>
      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        {/* Social row */}
        <div className="footer-social">
          <a href="#" aria-label="Địa chỉ"><i className="fa-solid fa-location-dot" /></a>
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
          <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
          <a href="#" aria-label="Hotline"><i className="fa-solid fa-phone" /></a>
        </div>

        {/* Content columns */}
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

        {/* Bottom legal */}
        <div className="footer-bottom container">
          <p><strong>Copyright © 2008 Công ty CPTM SD SHOP &amp; Mỹ Phẩm.</strong></p>
          <p>Giấy chứng nhận ĐKKD số: 0317116620 do Sở KH&amp;ĐT TPHCM cấp lần đầu ngày 10/01/2022.</p>
          <p>Địa chỉ: 10-10B Cách Mạng Tháng 8, Phường Bến Thành, TP. Hồ Chí Minh</p>
          <p>Điện thoại: 0337 990 731 - Đặt hàng: 0337 990 731 - CSKH: 0337 990 731</p>
        </div>

        {/* Floating actions */}
        <div className="floating-actions">
          <a className="fb" href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
          <a className="phone" href="#" aria-label="Gọi điện"><i className="fa-solid fa-phone" /></a>
          <a className="zalo" href="#" aria-label="Zalo">Zalo</a>
          <a className="mess" href="#" aria-label="Messenger"><i className="fa-brands fa-facebook-messenger" /></a>
        </div>

        {/* Back to top */}
        <button
          className={`btn-top${showTop ? " show" : ""}`}
          aria-label="Lên đầu trang"
          title="Lên đầu trang"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fa-solid fa-arrow-up" />
        </button>
      </footer>
    </>
  );
}
